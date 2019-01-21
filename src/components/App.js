import React, { Component } from 'react'
import Header from './Header'
import Counter from './Counter'
import Form from './Form'
import Footer from './Footer'
import '../css/App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      guids: []
    }
  }

  async componentDidMount() {
    try {
      const guids = await (await fetch(`http://localhost:3000/?amount=1`)).json()
      this.setState({ guids })
      console.log(this.state)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="app-container pt-32">
        <div className="app-item app-item1 mr-12">
          <Header />
          <hr className="app-hr" />
          <h1 className="app-title app-font font-semibold leading-tight mt-12 mb-10">Generate some beautiful<br />GUIDs for your project</h1>
          <p className="app-text-secondary leading-normal w-5/6">Use GUIDs as key identifiers for your event-driven architecture or to keep track of your system’s inventory. GUIDs are great, we’re here to help you generate them.</p>
          <Counter />
        </div>
        <div className="app-item app-item2">
          <div className="w-full max-w-sm">
            <Form />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
