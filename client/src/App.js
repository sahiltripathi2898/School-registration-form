import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Register from './components/Register'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <div className="container">
          <Route exact path="/" component={Register} />
            
          </div>
        </div>
      </Router>
    )
  }
}

export default App
