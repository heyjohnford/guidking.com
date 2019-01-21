import React from 'react'
import { ReactComponent as Logo } from '../assets/logo.svg'

export default (props) => {
    return (
        <header>
            <a className="app-logo inline-flex mb-5" href="/">
                Home
                <Logo />
            </a>
        </header>
    )
}


