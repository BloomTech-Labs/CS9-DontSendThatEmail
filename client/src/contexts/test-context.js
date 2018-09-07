import React, { Component } from "react";
export const TestContext = React.createContext({});
//from doc

class TestProvider extends Component {
  state = {
    header: "test for context"
  };

  render() {
    return (
      <TestContext.Provider value={this.state}>
        {this.props.children}
        {/* //from doc */}
      </TestContext.Provider>
    );
  }
}

export default TestProvider;
