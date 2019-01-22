import React, { useState } from 'react'
import FormItem from './FormItem'
import { formOptions } from '../constants'
import { BASE_API } from '../constants'
import helpers from '../helpers'

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
      const response = await (await fetch(`${BASE_API}?amount=${state.guidAmount}`)).json()

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

      if (option.checked && option.name !== formOptions[0].name) {
        modifiedGuids = helpers[funcName](modifiedGuids)
      }

      if (!option.checked && option.name === formOptions[0].name) {
        modifiedGuids = helpers[funcName](modifiedGuids)
      }

      return modifiedGuids
    }, guids)
  }

  return (
    <form className="app-form bg-white shadow-md rounded" onSubmit={handleGenerateGuidsSubmit}>
      <div className="app-form-container px-8 pt-6 pb-8 mb-3">
        <h2 className="app-title-secondary text-lg mb-6">Go Ahead, Get Your GUID On</h2>
        <div className="mb-3">
          <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darkest leading-loose focus:outline-none focus:bg-white focus:border-blue"
            id="amount"
            name="amount"
            type="text"
            value={state.guidAmount}
            onChange={handleAmountChange}
            placeholder="Number of GUIDs..."
          />
        </div>
        <small className="text-grey-dark"><em>**No more than 5,000 GUIDs please</em></small>
        <hr className="app-hr mt-4" />
        <div className="app-text mt-8 mb-6">
          {checkmarkOptions}
        </div>
        <hr className="app-hr" />
      </div>
      <div>{state.guids}</div>
      <div>{formatGuids(state.guids)}</div>
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

