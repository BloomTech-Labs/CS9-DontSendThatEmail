import React, { Component } from "react";
import { Card, CardBody, CardTitle, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./addletter.css";
const addLetter = props => {
  console.log("some string", props.context);
  const { auth } = props.context.userData;

  return (
    <Col className="addletter" lg="1">
      {auth ? (
        <Link to="/dashboard/create/add">
          <Card className="documents-style">
            <CardBody>
              <CardTitle>Add a new letter</CardTitle>
              <br />

              <i className="fas fa-plus-circle" />
            </CardBody>
          </Card>
        </Link>
      ) : (
        props.history.push("/dashboard/create")
      )}
    </Col>
  );
};
export default addLetter;
