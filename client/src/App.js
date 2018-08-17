import React, { Component } from "react";
import { Row } from "reactstrap";
import "./App.css";
import "./components/generalstyle.css";

import { Route } from "react-router-dom";
import Landing from "./landingpage.js";
import Dashboard from "./components/dashboard";
import AddLetter from "./components/addLetter";
import LetterControl from "./components/letterControl";
import UserSettings from "./components/userSettings";
import LandingPage from "./components/landingPage";
import Documents from "./components/documents";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />

        <Row>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard" component={AddLetter} />
          <Route exact path="/dashboard/create" component={LetterControl} />
          <Route exact path="/dashboard/settings" component={UserSettings} />
          <Route exact path="/dashboard/documents" component={Documents} />
        </Row>
      </div>
    );
  }
}

export default App;
