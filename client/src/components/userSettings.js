import React, { Component, Fragment } from "react";
import { Card, CardBody, Button, Col, Row, Form, Input, Label } from "reactstrap";
// import Input from "react-validation/build/input";
// import Form from 'react-validation/build/form';
import validator from 'validator';

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
      console.log("passwords do not match");
    }
    if (this.state.email !== this.state.validateEmail) {
      console.log("emails do not match");
    }
  };

  required = (value) => {
    if (!value.toString().trim().length) {
      // We can return string or jsx as the 'error' prop for the validated Component
      return 'require';
    }
  };
   
  email = (value) => {
    if (!validator.isEmail(value)) {
      return `${value} is not a valid email.`
    }
  };

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
          <br />
        </Fragment>
      );
    } else if (this.state.option === "email") {
      return (
        <Fragment>
          <Form>
          <Row>
            <Col md="4">New Email</Col>
            <Col md="4">
            {this.validEmailNotification()}
              <Input
                name="email"
                placeholder="Change Email"
                value={this.state.email}
                onChange={this.handleChange}
                validations={[this.required, this.email]}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col md="4">Re-Enter Email</Col>
            <Col md="4">
              <Input
                name="validateEmail"
                placeholder="Match Above Email"
                value={this.state.validateEmail}
                onChange={this.handleChange}
              />
            </Col>
          </Row>
          <br />
          </Form>
        </Fragment>
      );
    } else {
      return (
        <Card>
          <CardBody>Loading Options...</CardBody>
        </Card>
      );
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  renderEmailValidation = () => {
    if (validator.isEmail(this.state.email)) {
    return <Button onClick={() => this.handleSubmit()}>Save</Button>
    } else {
      return (
        
      <Button>Luish</Button>)     
    }
  } 

  validEmailNotification = () => {
    if (!validator.isEmail(this.state.email)) {
      return <div className="danger">Invalid Email</div>
    }
  }

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
                    {this.renderEmailValidation()}
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
