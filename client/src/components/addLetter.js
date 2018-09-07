import React, { Component } from "react";
import { Card, CardBody, CardTitle, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./addletter.css";
const addLetter = props => {
  console.log("some string", props.context);
  const { auth } = props.context.userData;

  return (
    <Col className="" lg="1">
           <Link to="/dashboard/create/add">
          <br />

          <i className="fas fa-plus-circle" />
        </Link>
      
    </Col>
  );
};
export default addLetter;
