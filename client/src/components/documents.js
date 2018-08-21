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
  constructor(props) {
    super(props);
    this.state = {};
  }

  listDocuments() {
    let i = 0;
    let docs = [];
    for (; i < 5; i++) {
      docs.push(<Document key={i} />);
    }
    return (
      <Row>
        {docs}
        <AddLetter {...this.props}/>
      </Row>
    );
  }
  addletter() {
    return <Col md="9" />;
  }
  render() {
    const { auth } = this.props.context.userData;

    return (
      <div>
        {auth ? (
          <Col md="8">{this.listDocuments()}</Col>
        ) : (
          this.props.history.push("/")
        )}
      </div>
    );
  }
}

export default Documents;
