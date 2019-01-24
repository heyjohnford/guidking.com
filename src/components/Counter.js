import React from 'react'
import { Spring, config } from'react-spring'

export default (props) => {
  const { totalGuids } = props

  return (
    <div className="app-guidcounter app-font font-semibold italic mt-32 sm:my-6 sm:text-xs sm:font-normal">
      <p className="text-grey-darker">So Far,
        <Spring
          from={{ number: totalGuids }}
          to={{ number: totalGuids }}
          config = { config.default }
        >
          {props => <span className="text-blue font-bold text-3xl sm:text-lg"> {Number(props.number.toFixed()).toLocaleString()} </span>}
        </Spring>
        GUIDs Created
      </p>
    </div>
  )
}
