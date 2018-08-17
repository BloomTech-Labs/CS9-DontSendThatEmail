

import React from "react";
import { Card, CardBody, CardTitle, Button,Col,Input,Row } from "reactstrap";
import { Link } from "react-router-dom";
const UserSettings = () => {
  return (
    <Col md="8">
    <Card>
      <CardBody>
        <br/>
        <Row>
            <Col md="4">
            Name
            </Col>
            <Col md="4">
            <Input/>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col md="4">
            Old Password
            </Col>
            <Col md="4">
            <Input/>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col md="4">
            New Password
            </Col>
            <Col md="4">
            <Input/>
            </Col>
        </Row>
        <br/>
        <Button>Save</Button>
      </CardBody>
    </Card>
    </Col>
  );
};
export default UserSettings;
