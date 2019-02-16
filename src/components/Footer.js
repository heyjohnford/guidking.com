import React from 'react'

export default (props) => {
  const { hiddenClassName } = props

  return (
    <footer className={`app-footer pin-b my-10 sm:relative sm:mb-2 sm:mt-8 ${hiddenClassName}`}>
      <a className="opacity-50 hover:opacity-100" href="https://github.com/johnamiahford/guidking.com/">
        <img src="/github.svg" width="18" height="18" alt="Github" />
      </a>
      <small className="block mt-1 text-grey-darker">&copy; 2019 Guid King. All rights reserved.</small>
    </footer>
  )
}

