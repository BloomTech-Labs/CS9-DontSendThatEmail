import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  Label
} from "reactstrap";
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    console.log('clicked')

    e.preventDefault();
    // const setLogin = this.props.context.actions.setLogin;
    const user = {
      username: this.state.username,
      password: this.state.password,
    }
    axios
    .post('https://dontemail.herokuapp.com/auth/login',user )
    .then(resp => {
      console.log(resp.data)
      // const user = resp.data.user;

      localStorage.setItem("token",`Bearer ${resp.data.token}`)

      const { toggleAuth } = this.props.context.actions
      toggleAuth()
      this.props.history.push("/dashboard")
      console.log(resp)
    }).catch(err =>
    console.log(err)
    )
  }
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
