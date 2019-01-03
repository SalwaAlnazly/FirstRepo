import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './App.css'
import RadioBtnSection from './container/RadioBtnSection'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/' component={RadioBtnSection} />
            <Route exact path='*' render={() => <h1>Page not found</h1>} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App


