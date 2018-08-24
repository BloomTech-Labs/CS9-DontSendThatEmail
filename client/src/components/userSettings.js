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
    this.setState({option,})
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
                <Row>
                  <Col md="4">Name</Col>
                  <Col md="4">
                    <Input />
                  </Col>
                </Row>
                <br />
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

                  <br />
                  <br />
                  <Col md="12">
                    <Button>Save</Button>
                  </Col>
                </Row>
                <Link to="/dashboard"><Button>Home</Button></Link>
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
