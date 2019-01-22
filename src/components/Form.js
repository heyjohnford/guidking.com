import React, { useState } from 'react'
import FormItem from './FormItem'
import { formOptions } from '../constants'

const Form = (props) => {
  const checkmarkOptions = formOptions.map(o => <FormItem key={o.name} name={o.name} checked={o.checked} />)
  const [amount, setAmount] = useState('1')

  function handleAmountChange(e) {
    setAmount(e.target.value)
  }

  return (
    <form className="app-form bg-white shadow-md rounded">
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
            value={amount}
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
      <div className="flex items-center justify-between">
        <button
          className="app-btn bg-blue text-white text-xl font-bold w-full py-6 rounded rounded-t-none hover:bg-blue-dark focus:outline-none focus:shadow-outline"
          type="button"
          aria-label="Generate"
          onClick={props.handleGenerateGuidsClick}
        >
          Generate GUIDs
        </button>
      </div>
    </form>
  )
}

export default Form

