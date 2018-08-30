import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Card, Input, Button, CardBody } from "reactstrap";
import axios from "axios";

//implemented signup component
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      redirect: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log("clicked");
    console.log("props", this.props);
    e.preventDefault();
    // const setLogin = this.props.context.actions.setLogin;
    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };
    axios
      .post("https://dontemail.herokuapp.com/auth/register", user)
      .then(resp => {
        this.props.history.push("/login");
      })
      .catch(err => console.log(err));
    this.setState({
      username: "",
      password: "",
      email: "",
      redirect: true // set redirect boolean to true on state to trigger the redirect
    });
  };

  // After registration, redirects to login page
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Calls redirect function when true triggers redirect */}
        {this.renderRedirect()}
        <Card>
          <CardBody>
            <Input
              placeholder="username"
              value={this.state.username}
              name="username"
              onChange={this.handleChange}
            />

            <br />
            <Input
              placeholder="password"
              value={this.state.password}
              name="password"
              type="password"
              onChange={this.handleChange}
            />

            <br />
            <Input
              placeholder="email"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />

            <Button>SIGN UP</Button>
          </CardBody>
        </Card>
      </form>
    );
  }
}

export default Signup;
