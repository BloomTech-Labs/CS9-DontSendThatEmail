import React, { Component } from "react";
import {
  Card,
  CardBody,
  Button,
  Col,
  Input,
  Row,
  Progress,
  Label
} from "reactstrap";
import "./letterControl.css";
import axios from "axios";
import { Link } from "react-router-dom";

class LetterControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      versions: [{ content: "Content..." }],
      name: "Name",
      destination: "To",
      versionsCounter: 0,
      anger: 0,
      sadness: 0,
      joy: 0,
      id: ""
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    if (id !== "add") {
      this.setletter(id);
    }
  }

  setletter(id) {
    axios
      .get(`https://dontemail.herokuapp.com/letters/${id}`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(resp => {
        this.setState({
          versions: resp.data.versions,
          name: resp.data.name,
          destination: resp.data.destination,
          id: id
        });
        this.versionsCounter();
      })
      .catch(err => {});
  }

  // save the content of the current content
  saveVersion() {
    let id = this.state.id;
    let newVersion = {};
    newVersion.content = this.state.versions[
      this.state.versionsCounter
    ].content;

    axios
      .post(
        `https://dontemail.herokuapp.com/letters/updateLetter/${id}`,
        newVersion
      )
      .then(resp => {
        console.log(resp.data);
        this.setletter(id);
      });
  }

  // sets the current index for the version rendering in the component
  versionsCounter() {
    this.setState({ versionsCounter: this.state.versions.length - 1 });
  }
  // change the index of the version to change what content is rendered.
  changeVersion(type) {
    let counter = this.state.versionsCounter;
    if (type === "up") {
      if (this.state.versionsCounter + 1 < this.state.versions.length) {
        counter++;
      } else {
        counter = 0;
      }
    } else {
      if (this.state.versionsCounter - 1 !== -1) {
        counter--;
      } else {
        counter = this.state.versions.length - 1;
      }
    }
    this.setState({ versionsCounter: counter });
  }
  // render the save button based on the if the version is the most current version.
  renderSave() {
    if (this.state.versionsCounter + 1 === this.state.versions.length) {
      return <Button onClick={() => this.saveVersion()}>Save</Button>;
    } else {
      return <Button onClick={() => this.saveVersion()}>Save As</Button>;
    }
  }
  render() {
    const { auth } = this.props.context.userData;
    return (
      <Col md="7">
        {auth ? (
          <Card className="controlCard-styles">
            <CardBody>
              <br />
              <Row>
                <Col md="3">
                  <Input value={this.state.name} />
                </Col>
                <Col md="2">
                  Edit {this.state.versionsCounter + 1}/
                  {this.state.versions.length}
                </Col>
              </Row>
              <br />
              <Row>
                <Col md="3">
                  <Input value={this.state.destination} />
                </Col>
                <Col md="1">
                  <Button>Analyze</Button>
                </Col>
              </Row>
              <br />
              <Row className="rowTextArea-styles">
                <Col md="6">
                  <Input
                    className="controlTextarea-styles"
                    type="textarea"
                    value={
                      this.state.versions[this.state.versionsCounter].content
                    }
                  />
                </Col>
                <Col md="3">
                  <Label>Anger</Label>

                  <Progress color="danger" value={this.state.anger}>
                    25%
                  </Progress>
                  <br />
                  <Label>Joy</Label>

                  <Progress color="success" value={this.state.joy}>
                    25%
                  </Progress>
                  <br />
                  <Label>Sadness</Label>

                  <Progress value={this.state.sadness}>25%</Progress>
                </Col>
              </Row>
              <br />
              <Row className="controlBtn-styles">
                <Col md="6">
                  <i
                    className="fas fa-arrow-circle-left"
                    onClick={() => this.changeVersion("down")}
                  />
                </Col>
                <Col md="6">
                  <i
                    className="fas fa-arrow-circle-right"
                    onClick={() => this.changeVersion("up")}
                  />
                </Col>
              </Row>
              <br />
              <Row className="controlBtn-styles">
                <Col md="6">
                  <Link to="/dashboard">
                    <Button>Cancel</Button>
                  </Link>
                </Col>

                <Col md="6">{this.renderSave()}</Col>
              </Row>
            </CardBody>
          </Card>
        ) : (
          this.props.history.push("/")
        )}
      </Col>
    );
  }
}
export default LetterControl;
