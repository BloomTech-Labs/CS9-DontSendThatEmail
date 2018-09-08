import React, { Component } from "react";
export const TestContext = React.createContext({});
import axios from "axios";

class TestProvider extends Component {
  state = {
    header: "test for context"
  };

  setUser() {
    const response = axios.get("");
    this.setState({});
  }

  componentDidMount() {
    this.setUser();
  }

  render() {
    return (
      <TestContext.Provider value={this.state}>
        {this.props.children}
      </TestContext.Provider>
    );
  }
}

export default TestProvider;
