import React, { Component } from "react";
import { Row } from "reactstrap";
import "./App.css";
import "./components/generalstyle.css";
import TestProvider, {TestContext} from './contexts/test-context'; //here 

import { Route } from "react-router-dom";
import Landing from "./landingpage.js";
import Dashboard from "./components/dashboard";
import AddLetter from "./components/addLetter";
import LetterControl from "./components/letterControl";
import UserSettings from "./components/userSettings";
import LandingPage from "./components/landingPage";
import Documents from "./components/documents";
import AuthProvider, {AuthContext} from  './contexts/authProvider'; 

class App extends Component {
  render() {
    return (
      <div className="App">
    
        <Route exact path="/" component={LandingPage} />
      
        <AuthProvider>
          <AuthContext.Consumer> 
              {context => (
              <Row>
                <Route path="/dashboard" render = {props => (<Dashboard {...props} context={context}/>)} />
                <Route exact path="/dashboard"   render = {props => (<AddLetter {...props} context={context}/>)}/>
                <Route exact path="/dashboard/create"  render = {props => (<LetterControl {...props} context={context}/>)} />
                <Route exact path="/dashboard/settings"   render = {props => (<UserSettings {...props} context={context}/>)}/>
                <Route exact path="/dashboard/documents"  render = {props => (<Documents {...props} context={context}/>)} />
              </Row>
              ) }

            </AuthContext.Consumer>  
        </AuthProvider>
      </div>
    );
  }
}

export default App;
