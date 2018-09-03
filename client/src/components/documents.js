import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  CardSubtitle,
  CardText,
  Table,
  Input
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./documents.css";
import AddLetter from "./addLetter";
import AddResume from "./addresume";
class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: []
    };
  }
  componentDidMount() {
    //let id = this.props.context.userData.id

    axios
      .get(`https://dontemail.herokuapp.com/letters`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(resp => {
        this.setState({ letters: resp.data.letters });
      })
      .catch(err => {});
  }

  listDocuments() {
    return this.state.letters.map(letter => (
      <Fragment>

        <Link to={`/dashboard/create/${letter._id}`}>
           <Card className="documents-style">
              <CardBody>
                <CardTitle>{letter.name}</CardTitle>


                <CardSubtitle>{letter.destination}</CardSubtitle>

                <CardText>
                  {letter.versions[letter.versions.length - 1].content}
                </CardText>

                <Link to="/dashboard/create">
                  <i className="far fa-copy"></i>
                </Link>
              </CardBody>
            </Card>
        </Link>

      </Fragment>
    ));
  }

  render() {
    const { auth } = this.props.context.userData;

    return (
      <Col className="documentsbox" md="10">
        {auth ? (
          <Fragment>
            <Row className="topbox">
              <AddLetter {...this.props} />
              <AddResume {...this.props}/>
              <Input className="search" type="text" placeholder="search"/>
            </Row>
            <Row className="databox">

              {this.listDocuments()}
              {this.listDocuments()}
            </Row>
          </Fragment>
        ) : (
          this.props.history.push("/")
        )}
      </Col>
    );
  }
}

export default Documents;
