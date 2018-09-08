import React, { Component } from "react";
export const TestContext = React.createContext({});

class TestProvider extends Component {
  state = {
    header: "test for context"
  };

  render() {
    return (
      <TestContext.Provider value={this.state}>
        {this.props.children}
      </TestContext.Provider>
    );
  }
}
