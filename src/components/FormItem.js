import React, { useState } from 'react'

export default (props) => {
    const { name, checked } = props
    const [isChecked, setIsChecked] = useState(checked)

    function handleIsCheckedChange(e) {
        setIsChecked(!isChecked)
    }

    return (
        <label className="block relative mb-10 pl-12">
            <input
                className="appearance-none border rounded app-input-checkbox hover:bg-grey-lighter cursor-pointer"
                type="checkbox"
                checked={isChecked}
                onClick={handleIsCheckedChange}
            />
            <span className="text-xl">{name}</span>
        </label>
    )
}

