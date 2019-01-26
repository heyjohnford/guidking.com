import React, { Component } from 'react'
import Header from './Header'
import Counter from './Counter'
import Form from './Form'
import Footer from './Footer'
import { gofetch } from '../helpers'
import { SOCKET_API } from '../constants'
import socket from 'socket.io-client'
import '../css/App.css'

const  clientSocket = socket(SOCKET_API + 'total')

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { totalGuids: 0 }
  }

  async initialGuidTotal() {
    try {
      const response = await gofetch('total')

      if (response.error) {
        return
      }

      this.setState({ totalGuids: response.total })
    } catch (err) {
      console.log('Client error fetching /total: ', err)
    }
  }

  subscribeToCounter() {
    try {
      clientSocket.on('counter', (data) => {
        this.setState({ totalGuids: data.total })
      })
    } catch (err) {
      console.log('Error occurred fetching socket: ', err)
    }
  }

  async componentDidMount() {
    await this.initialGuidTotal()
    this.subscribeToCounter()
  }

  render() {
    return (
      <section className="app-container pt-32 sm:pt-1">
        <div className="app-item app-item1 mr-12 pl-4">
          <Header />
          <hr className="app-hr" />
          <h1 className="app-title app-font text-4xl sm:text-xl font-semibold leading-tight mt-12 sm:my-4 mb-10">Generate some beautiful<br />GUIDs for your project</h1>
          <p className="app-text-secondary leading-normal w-5/6 sm:hidden">Use GUIDs as key identifiers for your event-driven architecture or to keep track of your system’s inventory. GUIDs are great, we’re here to help you generate them.</p>
          <Counter totalGuids={this.state.totalGuids} />
        </div>
        <div className="app-item app-item2 sm:px-4">
          <div className="w-full max-w-sm">
            <Form />
          </div>
        </div>
        <Footer />
      </section>
    )
  }
}

export default App
