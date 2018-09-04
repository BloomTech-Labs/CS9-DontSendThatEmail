import React, { Component } from "react";
import { Card, CardBody, CardTitle, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";
import './addresume.css'
const addResume = props => {
  console.log("some string", props.context);
  const { auth } = props.context.userData;

  return (
    <Col className="addresume" lg="1">
      {auth ? (
        <Card className="documents-style">
          <CardBody>
            <CardTitle>Add a new Resume</CardTitle>
            <br />
            <Link to="/dashboard/create/add">
              <i className="fas fa-plus-circle" />
            </Link>
          </CardBody>
        </Card>
      ) : (
        props.history.push("/dashboard/create")
      )}
    </Col>
  );
};
export default addResume;
