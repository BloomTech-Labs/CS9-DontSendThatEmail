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

class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Card>
        <CardBody>
          <Input placeholder="username" />

          <br />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
        </CardBody>
      </Card>
    );
  }
}

export default Login;
