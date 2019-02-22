import React, { Component } from 'react';
import Login from './components/login';
import Register from './components/register'
import Messages from './components/messages'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Register />
        <Login />
        <Messages />
      </div>
    );
  }
}

export default App;


