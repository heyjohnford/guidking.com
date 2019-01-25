import React, { useState } from 'react'
import FormItem from './FormItem'
import Guids from './Guids'
import { formOptions } from '../constants'
import helpers, { gofetch } from '../helpers'

const Form = (props) => {
  const [state, setState] = useState({
    guids: [],
    guidAmount: 1,
    formOptions: formOptions || []
  })
  const checkmarkOptions = state.formOptions.map(o => (
    <FormItem
      key={o.name}
      name={o.name}
      checked={o.checked}
      handleIsCheckedChange={handleIsCheckedChange}
    />
  ))

  function handleIsCheckedChange(e) {
    const { name, checked } = e.target
    const options = state.formOptions.map(o => o.name === name ? { ...o, checked } : o)

    setState({ ...state, formOptions: options })
  }

  async function handleGenerateGuidsSubmit(e) {
    e.preventDefault()

    try {
      const response = await gofetch(`?amount=${state.guidAmount}`)

      if (!response.error) {
        setState({ ...state, guids: response })
        return
      }

      reportError(response)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  function reportError(err) {
    alert(err.message)
  }

  function handleAmountChange(e) {
    const value = e.target.value

    if (!/^(\s*|\d+)$/.test(value) || value.length > 4) {
      return
    }

    setState({ ...state, guidAmount: value  })
  }

  function formatGuids(guids = []) {
    return state.formOptions.reduce((modifiedGuids, option) => {
      const funcName = option.name.toLowerCase() + 'Pipeline'
      const HYPHEN = formOptions[0].name

      if (option.checked && option.name !== HYPHEN) {
        modifiedGuids = helpers[funcName](modifiedGuids)
      }

      if (!option.checked && option.name === HYPHEN) {
        modifiedGuids = helpers[funcName](modifiedGuids)
      }

      return modifiedGuids
    }, guids)
  }

  const guidMsg = <small className="sm:float-right sm:font-normal"><em>**No more than 3,000 GUIDs please</em></small>

  return (
    <form className="app-form bg-white shadow-md rounded" onSubmit={handleGenerateGuidsSubmit}>
      <div className="app-form-container px-8 pt-6 pb-8 mb-3 sm:py-5 sm:px-4">
        <h2 className="app-title-secondary text-lg mb-6 sm:text-sm">Go Ahead, Get Your GUID On</h2>
        <div className="mb-3">
          <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="amount">
            Amount <span className="md:hidden sm:text-blue-darker">{guidMsg}</span>
          </label>
          <input
            className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darkest leading-loose focus:outline-none focus:bg-white focus:border-blue"
            id="amount"
            name="amount"
            type="number"
            value={state.guidAmount}
            onChange={handleAmountChange}
            placeholder="Number of GUIDs..."
          />
        </div>
        <span className="text-grey-dark sm:hidden">{guidMsg}</span>
        <hr className="app-hr mt-4 sm:hidden" />
        <div className="app-text mt-8">
          {checkmarkOptions}
        </div>
        <hr className="app-hr pt-1" />
        <Guids guids={state.guids} formatGuids={formatGuids} />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="app-btn bg-blue text-white text-xl font-bold w-full py-6 rounded rounded-t-none hover:bg-blue-dark focus:outline-none focus:shadow-outline"
          type="button"
          aria-label="Generate"
          onClick={handleGenerateGuidsSubmit}
        >
          Generate GUIDs
        </button>
      </div>
    </form>
  )
}

export default Form

