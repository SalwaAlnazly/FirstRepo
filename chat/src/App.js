import React, { Component } from 'react';
import Login from './components/login';
import Register from './components/register'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Register />
        <Login />
      </div>
    );
  }
}

export default App;


