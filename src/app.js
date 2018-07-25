import React, { Component } from 'react'
import Register from './components/register'

class App extends Component {
  
  state = {
    fields: {}
  }

  onSubmit = fields => {
    this.setState({ fields })
  }

  render() {
    return (
      <div className="app">
        <Register onSubmit={fields => this.onSubmit(fields)} />
        {/* <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p> */}
      </div>
    )
  }

}

export default App