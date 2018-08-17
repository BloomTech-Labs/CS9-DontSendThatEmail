import React from "react";
import { Card, CardBody, CardTitle, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";
const addLetter = () => {
  return (
    <Col md="4">
      <Card className="documents-style">
        <CardBody>
          <CardTitle>Add a new letter</CardTitle>
          <br />
          <Link to="/dashboard/create">
            <i className="fas fa-plus-circle" />
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};
export default addLetter;
