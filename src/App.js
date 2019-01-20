import React, { Component } from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container pt-32">
        <div className="app-item app-item1 mr-12">
          <header>
            <a className="inline-flex mb-5" href="/">
              <Logo />
            </a>
          </header>
          <hr className="app-hr" />
          <h1 className="app-title app-font font-semibold leading-tight mt-12 mb-10">Generate Some beautiful<br />GUIDs for your project</h1>
          <p className="app-text-secondary leading-normal w-5/6">Use GUIDs as key identifiers for your event-driven architecture or to keep track of your system’s inventory. GUIDs are great, we’re here to help you generate them.</p>
          <div className="app-guidcounter app-font font-semibold italic mt-32">
            <p className="text-blue-darkest">So Far, <span className="text-blue font-bold text-3xl">2,203</span> GUIDs Created</p>
          </div>
        </div>
        <div className="app-item app-item2">
          <div className="w-full max-w-sm">
            <form className="app-form bg-white shadow-md rounded">
              <div className="app-form-container px-8 pt-6 pb-8 mb-3">
                <h2 className="app-title-secondary text-lg mb-6">Go Ahead, Get Your GUID On</h2>
                <div className="mb-3">
                  <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="amount">
                    Amount
                  </label>
                  <input className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darkest leading-loose focus:outline-none focus:bg-white focus:border-blue" id="number-of-guids" name="number-of-guids" type="text" placeholder="Number of GUIDs..." />
                </div>
                <small className="text-grey-dark"><em>**No more than 5,000 GUIDs please</em></small>
                <hr className="app-hr mt-4" />
                <div className="app-text mt-8 mb-6">
                  <label className="block relative mb-10 pl-12">
                    <input className="appearance-none border rounded app-input-checkbox hover:bg-grey-lighter cursor-pointer" type="checkbox" />
                    <span className="text-xl">Hyphens</span>
                  </label>
                  <label className="block relative mb-10 pl-12">
                    <input className="appearance-none border rounded app-input-checkbox hover:bg-grey-lighter cursor-pointer" type="checkbox" />
                    <span className="text-xl">Uppercase</span>
                  </label>
                  <label className="block relative mb-10 pl-12">
                    <input className="appearance-none border rounded app-input-checkbox hover:bg-grey-lighter cursor-pointer" type="checkbox" />
                    <span className="text-xl">Braces</span>
                  </label>
                </div>
                <hr className="app-hr" />
              </div>
              <div className="flex items-center justify-between">
                <button className="app-btn bg-blue text-white text-xl font-bold w-full py-6 rounded rounded-t-none hover:bg-blue-dark focus:outline-none focus:shadow-outline" type="button">
                  Generate GUIDs
                </button>
              </div>
            </form>
          </div>
        </div>
        <footer className="app-footer absolute">
          <small className="text-grey-darker">&copy; 2019 Guid King. All rights reserved.</small>
        </footer>
      </div>
    );
  }
}

export default App;
