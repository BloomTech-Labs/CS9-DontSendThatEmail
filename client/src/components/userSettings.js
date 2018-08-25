import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Button, Col, Input, Row } from "reactstrap";
import { Link } from "react-router-dom";


class UserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: ""
    };
  }

componentDidMount() {
  const option = this.props.match.params.type;
    this.setState({option})
}

returnHome =() =>{
  this.setState({option:''})
  this.props.history.push('/dashboard')
}

renderInput = () => {
  if(this.state.option === 'password') {
   return  (
     <Fragment>
      <Row>
          <Col md="4">Old Password</Col>
          <Col md="4">
            <Input />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="4">New Password</Col>
          <Col md="4">
            <Input />
          </Col>
        </Row>
     </Fragment>
    )
  } else if (this.state.option === 'email') {
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
    )
  } else {
    return (
    <Card>
      <CardBody>
        Loding Options...
      </CardBody>
    </Card>
    )
  }
}

  
  render() {
    const { auth } = this.props.context.userData;
    console.log(this.state.option)
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
                    <Button>Save</Button>
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
