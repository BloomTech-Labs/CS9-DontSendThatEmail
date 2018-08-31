import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  CardSubtitle,
  CardText
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./documents.css";
import AddLetter from "./addLetter";
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
          <Col sm="10" md="6" lg="4" key={letter._id}>
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
          </Col>
        </Link>
      </Fragment>
    ));
  }

  render() {
    const { auth } = this.props.context.userData;

    return (
      <Col className="documents-background" md="10">
        {auth ? (
          <Row>
            <AddLetter {...this.props} />
            {this.listDocuments()}

          </Row>
        ) : (
          this.props.history.push("/")
        )}
      </Col>
    );
  }
}

export default Documents;
