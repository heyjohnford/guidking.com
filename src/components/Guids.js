import React, { useState, useRef } from 'react'
import { COPY_TEXT, COPY_TEXT_COMPLETED } from '../constants'
import '../css/Tooltip.css'

export default (props) => {
  if (!props.guids.length) return null

  const [copyText, setCopyText] = useState(COPY_TEXT)
  const textareaRef = useRef(null)

  function copyToClipboard(e) {
    textareaRef.current.select()
    document.execCommand('copy')
    textareaRef.current.blur()
    document.getSelection().removeAllRanges()

    setCopyText(COPY_TEXT_COMPLETED)
  }

  const guids = props
    .formatGuids(props.guids)
    .join(',')
    .replace(/,/g, ', \n')

  return (
    <div className="app-form at-guids mt-6">
      <button
        className="text-blue float-right mb-3"
        onClick={copyToClipboard}
        onMouseLeave={(e) => setCopyText(COPY_TEXT)}
        type="button"
      >
        <small className="font-bold">
          <span tooltip={copyText} flow="up">
            <i className="app-icon app-icon-copy inline-block align-middle mr-1"></i>
            Copy
          </span>
        </small>
      </button>
      <textarea
        ref={textareaRef}
        className="app-format-guids-textarea w-full p-2 border border-grey-light sm:text-sm"
        value={guids}
        readOnly
      />
    </div>
  )
}

