import React, { Component } from "react";
import { Row } from "reactstrap";
import "./App.css";
import "./components/generalstyle.css";
import TestProvider, { TestContext } from "./contexts/test-context"; //here

import { Route, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "./components/dashboard";
import AddLetter from "./components/addLetter";
import LetterControl from "./components/letterControl";
import UserSettings from "./components/userSettings";
import LandingPage from "./components/landingPage";
import Documents from "./components/documents";
import Signup from "./components/signupmodal";
import Login from "./components/login";
import Billing from "./components/billing";
import Options from "./components/settingsOption";

import AuthProvider, { AuthContext } from "./contexts/authProvider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthProvider>
          <AuthContext.Consumer>
            {context => (
              <React.Fragment>
                <Route
                  exact
                  path="/"
                  render={props => <LandingPage {...props} context={context} />}
                />
                <Route
                  exact
                  path="/register"
                  render={props => <Signup {...props} context={context} />}
                />
                <Route
                  exact
                  path="/login"
                  render={props => <Login {...props} context={context} />}
                />
                <Row>
                  <Route
                    path="/dashboard"
                    render={props => <Dashboard {...props} context={context} />}
                  />
                  <Route
                    exact
                    path="/dashboard"
                    render={props => <AddLetter {...props} context={context} />}
                  />
                  <Route
                    exact
                    path="/dashboard/create/:id"
                    render={props => (
                      <LetterControl {...props} context={context} />
                    )}
                  />
                  <Route
                    exact
                    path="/dashboard/settings/options"
                    render={props => (
                      <Options {...props} context={context} />
                    )}
                  />
                  <Route
                    exact
                    path="/dashboard/settings/options/:type"
                    render={props => (
                      <UserSettings {...props} context={context} />
                    )}
                  />
                  <Route
                    exact
                    path="/dashboard/documents"
                    render={props => <Documents {...props} context={context} />}
                  />
                  <Route
                    exact
                    path="/dashboard/billing"
                    render={props => <Billing {...props} context={context} />}
                  />
                </Row>
              </React.Fragment>
            )}
          </AuthContext.Consumer>
        </AuthProvider>
      </div>
    );
  }
}

export default App;
