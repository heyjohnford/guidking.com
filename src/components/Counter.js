import React from 'react'
import { Spring, config } from'react-spring'

export default (props) => {
  return (
    <div className="app-guidcounter app-font font-semibold italic mt-32">
      <p className="text-grey-darker">So Far,
        <Spring
          from={{ number: 0 }}
          to={{ number: props.totalGuids }}
          delay="200"
          config = { config.default }
        >
          {props => <span className="text-blue font-bold text-3xl"> {Number(props.number.toFixed()).toLocaleString()} </span>}
        </Spring>
        GUIDs Created
      </p>
    </div>
  )
}
