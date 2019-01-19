import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container mt-32">
        <div className="app-item app-item1 mr-12">
          {logo}
          <hr className="app-hr" />
          <h1 className="app-title font-semibold leading-tight my-12">Generate Some beautiful<br />GUIDs for your project</h1>
          <p>Use GUIDs as key identifiers for your event-driven architecture or to keep track of your system’s inventory. GUIDs are great and we’re here to help you generate them.</p>
          <div className="app-guidcounter">
            <p>So Far</p>
            <p>1,203</p>
            <p>GUIDs Created</p>
          </div>
        </div>
        <div className="app-item app-item2">
          <div className="w-full max-w-sm">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2>Go Ahead, Get Your GUID On</h2>
              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
              </div>
              <div className="mb-6">
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                <p className="text-red text-xs italic">Please choose a password.</p>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
