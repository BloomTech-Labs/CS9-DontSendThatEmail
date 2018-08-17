import React, { Component } from "react";
import { Row } from "reactstrap";
import logo from "./logo.svg";
import "./App.css";
import Login from "./login";
import Signup from "./signup";
import { Route } from "react-router-dom";
import Landing from "./landingpage.js";
import Dashboard from "./components/dashboard";
import AddLetter from "./components/addLetter";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Row>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard" component={AddLetter} />
        </Row>
      </div>
    );
  }
}

export default App;
