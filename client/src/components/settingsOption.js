import React from "react";
import { Card, CardBody, CardTitle, Button, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

//This will allow users to go into their settings and update their email & password credentials
const Options = props => {
  console.log("some string", props.context);

  return (
    <Col md="4">
        <Card className="documents-style">
          <CardBody>
            <CardTitle>Choose Option</CardTitle>
            <br />
            <Row>
                <Col md="6">
                <Link to="/dashboard/settings/email"><Button>Update Email</Button></Link>
                </Col>
                <Col md="6">
                <Link to="/dashboard/settings/password"><Button>Update Password</Button></Link>
                </Col>
            </Row>
            <Link to="/dashboard/create/add">
              <i className="fas fa-plus-circle" />
            </Link>
          </CardBody>
        </Card>
    </Col>
  );
};

export default Options;