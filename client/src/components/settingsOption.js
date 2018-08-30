import React from "react";
import { Card, CardBody, CardTitle, Button, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./settings.css"
//This will allow users to go into their settings and update their email & password credentials
const Options = props => {
  console.log("some string", props.context);

  return (
    <Col classname="colBox-styles" md="8">
        <Card>
          <CardBody>
            <CardTitle>Choose Option</CardTitle>
            <br />
            <Row>
                <Col md="6">
                <Link to="/dashboard/settings/options/email"><Button>Update Email</Button></Link>
                </Col>
                <Col md="6">
                <Link to="/dashboard/settings/options/password"><Button>Update Password</Button></Link>
                </Col>
            </Row>
            <Link to="/dashboard/create/add">
              <i className="fas fa-wrench fa-2x" />
            </Link>
          </CardBody>
        </Card>
    </Col>
  );
};

export default Options;