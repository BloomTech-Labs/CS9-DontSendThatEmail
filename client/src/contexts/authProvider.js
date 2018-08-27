import React, { Component } from "react";
export const AuthContext = React.createContext({});

class AuthProvider extends Component {
  state = {
    auth: false,
    username: "",
    id: "",
    email: ""
  };

  // not using yet 
  toggleAuth = () => {
    this.setState({ auth: !this.state.auth });
  };
  // data being passed in login component used to context state (eg.like store) to be consumed by the component 
  setLogin = data => {
    this.setState({
      auth: true,
      username: data.username ? data.username : "",
      id: data._id ? data._id : "",
      email: data.email ? data.email : ""
    });
  };

  render() {
    const userData = this.state;

    return (
      // pass state values inside the provider 
      <AuthContext.Provider
        value={{
          userData,
          actions: { toggleAuth: this.toggleAuth, setLogin: this.setLogin }
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
