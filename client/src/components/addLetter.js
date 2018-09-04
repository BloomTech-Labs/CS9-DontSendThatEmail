import React, { Component } from "react";
import { Card, CardBody, CardTitle, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";
import './addletter.css'
const addLetter = props => {
  console.log("some string", props.context);
  const { auth } = props.context.userData;

  return (
    <Col className="addletter" lg="1">
      {auth ? (
        <Card className="documents-style">
          <CardBody>
            <CardTitle>Add a new letter</CardTitle>
            <br />
            <Link to="/dashboard/create/add">
              <i className="fas fa-plus-circle" />
            </Link>
          </CardBody>
        </Card>
      ) : (
        props.history.push("/")
      )}
    </Col>
  );
};
export default addLetter;
