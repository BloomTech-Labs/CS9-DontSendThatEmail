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
import LetterControl from"./components/letterControl";
import UserSettings from "./components/userSettings";
import LandingPage from "./components/landingPage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Row>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard" component={AddLetter} />
          <Route exact path="/dashboard/create" component={LetterControl} />
          <Route exact path="/dashboard/settings" component={UserSettings}/>
        </Row>
      </div>
    );
  }
}

export default App;
