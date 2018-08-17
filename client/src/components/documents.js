import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  Label,
  CardSubtitle,
  CardText
} from "reactstrap";
import { Link } from "react-router-dom";
import "./documents.css";
import AddLetter from "./addLetter";
import Document from "./document";
class Documents extends Component {
  constructor() {
    super();
    this.state = {};
  }

  listDocuments() {
    let i = 0;
    let docs = [];
    for (; i < 5; i++) {
      docs.push(<Document key={i} />);
    }
    return <Row>{docs}<AddLetter/></Row>;
  }
  addletter() {
    return (
      <Col md="8">

      </Col>
    );
  }
  render() {
    return (
      <Fragment>
        <Col md="8">
          {this.listDocuments()}
        </Col>
      </Fragment>
    );
  }
}

export default Documents;
