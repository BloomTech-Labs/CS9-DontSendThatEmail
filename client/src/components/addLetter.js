import React from "react";
import { Card, CardBody, CardTitle, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";
const addLetter = () => {
  return (
    <Col md="8">
      <Card>
        <CardBody>
          <CardTitle>Add a new letter</CardTitle>
          <br />
          <Link to="/dashboard/create">
            <i class="fas fa-plus-circle" />
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};
export default addLetter;
