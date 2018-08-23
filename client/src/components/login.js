import React, { Component } from "react";
import { Card, CardBody, Input, Button } from "reactstrap";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const setLogin = this.props.context.actions.setLogin;
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("https://dontemail.herokuapp.com/auth/login", user)
      .then(resp => {
        // const user = resp.data.user;

        localStorage.setItem("token", `Bearer ${resp.data.token}`);

        const { setLogin } = this.props.context.actions;
        setLogin(resp.data.user);
        this.props.history.push("/dashboard");
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Card>
          <CardBody>
            <Input
              value={this.state.username}
              name="username"
              placeholder="username"
              onChange={this.handleChange}
            />

            <br />
            <Input
              placeholder="password"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />
            <Button type="submit">LOGIN</Button>
          </CardBody>
        </Card>
      </form>
    );
  }
}

export default Login;
