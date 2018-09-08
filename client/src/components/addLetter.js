import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const addLetter = props => {

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
