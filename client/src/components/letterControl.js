import React, { Component } from "react";
import {
  Card,
  CardBody,
  Button,
  Col,
  Input,
  Row,
  Progress,
  Label,
  Form
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
      content: "",
      versionsCounter: 0,
      anger: 0,
      sadness: 0,
      joy: 0,
      analytical: 0,
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

  // allow user to create new letter
  createLetter() {
    let letter = {};
    if (this.state.name !== "Name") {
      letter.name = this.state.name;
    }
    if (this.state.destination !== "To") {
      letter.destination = this.state.destination;
    }
    if (this.state.content !== "") {
      letter.content = this.state.content;
    }

    // NOTE: Route not accepting destination info from user defaulting to N/A
    axios
      .post("https://dontemail.herokuapp.com/letters", letter, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(resp => {
        this.props.history.push(`/dashboard/create/${resp.data._id}`);
        this.setletter(resp.data._id);
      })
      .catch(err => console.log(err));
  }

  watson() {
    const text = {
      text: this.state.versions[this.state.versionsCounter].content
    };
    axios
      .post(
        "https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21",
        text,
        {
          auth: {
            username: "cd1287e9-2978-462a-8fd3-3e72d69049fa",
            password: "yw6pRzfl3Zgh"
          }
        }
      )
      .then(resp => {
        let sadness = 0;
        let anger = 0;
        let joy = 0;
        let analytical = 0;

        resp.data.document_tone.tones.forEach(tone => {
          if (tone.tone_id === "sadness") {
            sadness += Math.floor(tone.score * 100);
          } else if (tone.tone_id === "anger") {
            anger += Math.floor(tone.score * 100);
          } else if (tone.tone_id === "analytical") {
            analytical += Math.floor(tone.score * 100);
          } else if (tone.tone_id === "joy") {
            joy += Math.floor(tone.score * 100);
          }
        });
        console.log("watson", resp.data, sadness, analytical, joy);

        this.setState({
          sadness,
          anger,
          joy,
          analytical
        });
      })
      .catch(err => console.log(err));
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
    this.setState({
      versionsCounter: counter,
      analytical: 0,
      sadness: 0,
      joy: 0,
      anger: 0
    });
  }
  // render the save button based on the if the version is the most current version.
  renderSave() {
    if (this.state.id === "") {
      return <Button onClick={() => this.createLetter()}>Create</Button>;
    } else {
      if (this.state.versionsCounter + 1 === this.state.versions.length) {
        return <Button onClick={() => this.saveVersion()}>Save</Button>;
      } else {
        return <Button onClick={() => this.saveVersion()}>Save As</Button>;
      }
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { auth } = this.props.context.userData;
    return (
      <Col md="7" className="controlCol-styles">
        {auth ? (
          <Card>
            <CardBody>
              <br />
              <Form>
                <Row>
                  <Col md="3">
                    <Input
                      placeholder={this.state.name}
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col md="3">
                    <div className="versionsCounter-styles">
                      Edit {this.state.versionsCounter + 1}/
                      {this.state.versions.length}
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md="3">
                    <Input
                      placeholder={this.state.destination}
                      name="destination"
                      value={this.state.destination}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col md="1">
                    <Button onClick={() => this.watson()}>Analyze</Button>
                  </Col>
                </Row>
                <br />
                <Row className="rowTextArea-styles">
                  <Col md="6">
                    <Input
                      className="controlTextarea-styles"
                      type="textarea"
                      placeholder={
                        this.state.versions[this.state.versionsCounter].content
                      }
                      name="content"
                      value={this.state.content}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col md="4">
                    <div>
                      <Label>Anger</Label>

                      <Progress
                        animated
                        color="danger"
                        value={this.state.anger}
                      >
                        {this.state.anger}%
                      </Progress>
                      <br />
                      <Label>Joy</Label>

                      <Progress animated color="success" value={this.state.joy}>
                        {this.state.joy}%
                      </Progress>
                      <br />
                      <Label>Sadness</Label>

                      <Progress
                        animated
                        color="info"
                        value={this.state.sadness}
                      >
                        {this.state.sadness}%
                      </Progress>
                      <br />
                      <Label>Analytical</Label>

                      <Progress
                        animated
                        color="warning"
                        value={this.state.analytical}
                      >
                        {this.state.analytical}%
                      </Progress>
                    </div>
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
              </Form>
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
