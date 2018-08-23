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

                <br />
                <CardSubtitle>{letter.destination}</CardSubtitle>
                <br />
                <CardText>
                  {letter.versions[letter.versions.length - 1].content}
                </CardText>

                <Link to="/dashboard/create">
                  <Button>Copy</Button>
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
      <Col md="7">
        {auth ? (
          <Row>
            {this.listDocuments()}
            <AddLetter {...this.props} />
          </Row>
        ) : (
          this.props.history.push("/")
        )}
      </Col>
    );
  }
}

export default Documents;
