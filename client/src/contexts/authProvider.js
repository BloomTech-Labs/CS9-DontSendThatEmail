import React, { Component } from "react";
export const AuthContext = React.createContext({});

class AuthProvider extends Component {
  state = {
    auth: false,
    username: "test",
    password: "pass",
    letters: []
  };

  toggleAuth = () => {
    this.setState({ auth: !this.state.auth });
  };

  setLogin =(data) => {
    this.setState({
        auth: true, 
        username: data.username ? data.username : '', 
        password: data.password ? data.password : '', 
        letters: data.letters ? data.letters : []
    })
  }


  render() {
      const userData = this.state; 

    return (
      <AuthContext.Provider
        value={{ userData, actions: { toggleAuth: this.toggleAuth, setLogin: this.setLogin } }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
