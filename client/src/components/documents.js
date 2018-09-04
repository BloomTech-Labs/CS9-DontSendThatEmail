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
        {/* <Card className="documents-style">
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
            </Card> */}

        <div className="letterBox">
          <input type="checkbox" />
          <Link className="tablerow" to={`/dashboard/create/${letter._id}`}>
            <div>{letter.name}</div>
            <div>{letter.destination}</div>
            <time>August 19</time>
          </Link>
          <div className="databox-icons">
          <i class="fa fa-trash" aria-hidden="true" />
          <i class="far fa-copy" />
          <i class="fas fa-ellipsis-v" />
        </div>
        </div>
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
              <div className="create-template">
                <AddLetter {...this.props} />
                <AddResume {...this.props} />
                <AddResume {...this.props} />
              </div>

              <Input id="search" type="text" placeholder="search" />
            </Row>
            <Row className="databox">
              <Row className="header-row">
                <div className="header-text">
                  <div className="textstuff">Subject</div>
                  <div className="textstuff">To</div>
                  <div className="textstuff">Created at</div>
                </div>
                <div className="header-icons">
                  <i class="fas fa-th" />
                  <i class="fas fa-sort-alpha-down" />
                  <i class="fas fa-list" />
                </div>
              </Row>
              <Row className="listsofdocuments">
                {this.listDocuments()}

              </Row>
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
