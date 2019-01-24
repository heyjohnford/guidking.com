import React from 'react'

export default (props) => {
  const { name, checked, handleIsCheckedChange } = props

  return (
    <label className="block relative mb-8 pl-12" htmlFor={name}>
      <input
        className="appearance-none border rounded app-input-checkbox hover:bg-grey-lighter cursor-pointer"
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={handleIsCheckedChange}
      />
      <span className="text-xl">{name}</span>
    </label>
  )
}

