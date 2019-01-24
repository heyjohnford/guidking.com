import React from 'react'

export default (props) => {
  const { name, checked, handleIsCheckedChange } = props

  return (
    <label className="block relative mb-6 pb-2 pl-12 sm:inline-block sm:w-1/2" htmlFor={name}>
      <input
        className="appearance-none border rounded app-input-checkbox hover:bg-grey-lighter cursor-pointer"
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={handleIsCheckedChange}
      />
      <span className="text-xl sm:text-sm">{name}</span>
    </label>
  )
}

