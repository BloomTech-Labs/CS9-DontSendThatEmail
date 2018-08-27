import React, { Component, Fragment } from "react";
import { Card, CardBody, Button, Col, Input, Row } from "reactstrap";
import validator from "validator";


class UserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "",
      email: "",
      password: "",
      newEmail: "",
      validateEmail: "",
      validatePassword: ""
    };
  }

  componentDidMount() {
    const option = this.props.match.params.type;
    this.setState({ option });
  }

  returnHome = () => {
    this.setState({ option: "" });
    this.props.history.push("/dashboard");
  };

  handleSubmit = () => {
    if (this.state.password !== this.state.validatePassword) {
      console.log("passwords do not match")
    }
  }

  renderInput = () => {
    if (this.state.option === "password") {
      return (
        <Fragment>
          <form onSubmit={this.handleSubmit}>
            <Row>
              <Col md="4">New Password</Col>
              <Col md="4">
                <Input
                  name="password"
                  placeholder="Enter New Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col md="4">Re-Enter Password</Col>
              <Col md="4">
                <Input
                  name="validatePassword"
                  placeholder="Match Above Password"
                  value={this.state.validatePassword}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
          </form>
        </Fragment>
      );
    } else if (this.state.option === "email") {
      return (
        <Fragment>
          <Row>
            <Col md="4">Old Email</Col>
            <Col md="4">
              <Input />
            </Col>
          </Row>
          <br />
          <Row>
            <Col md="4">New Email</Col>
            <Col md="4">
              <Input />
            </Col>
          </Row>
        </Fragment>
      );
    } else {
      return (
        <Card>
          <CardBody>Loding Options...</CardBody>
        </Card>
      );
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { auth } = this.props.context.userData;
    // console.log(this.state.option);
    return (
      <Col md="8">
        {auth ? (
          <Fragment>
            <Card>
              <CardBody>
                <br />
                {this.renderInput()}
                <Row>
                  <br />
                  <br />
                  <Col md="12">
                    <Button onClick={() => this.handleSubmit()}>Save</Button>
                  </Col>
                </Row>
                <Button onClick={() => this.returnHome()}>Home</Button>
              </CardBody>
            </Card>
          </Fragment>
        ) : (
          this.props.history.push("/")
        )}
      </Col>
    );
  }
}
export default UserSettings;
