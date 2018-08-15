import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login'
import Signup from './signup'
import { Route } from 'react-router-dom'
import Landing from './landingpage.js'

class App extends Component {
  render() {
    return (
      <div className="App">

       <Route exact path="/" component= { Landing }/>
       <Route path="/signup" component={ Signup }/>
       <Route path="/login" component= { Login }/>
      </div>
    );
  }
}

export default App;
