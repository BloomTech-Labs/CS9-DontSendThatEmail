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
import { Editor, EditorState, convertToRaw, RichUtils } from "draft-js";
import { TSImportEqualsDeclaration } from "babel-types";

const styleMap = {
  HIGHLIGHT: {
    backgroundColor: "lightgreen"
  }
};

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
      sentence: [],
      id: "",
      icon: "",
      editorState: EditorState.createEmpty()
    };
    // this.onChange = (editorState) => this.setState({editorState);
  }

  onChange = editorState => {
    this.setState({ editorState });
    this.setState({
      content: this.state.editorState.getCurrentContent().getPlainText()
    });
  };
  componentDidMount() {
    let { id } = this.props.match.params;
    if (id !== "add") {
      this.setletter(id);
    }
  }

  handleKeyCommand = (command) => {
      const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
      if (newState) {
          this.onChange(newState);
          return 'handled';
      }
      return 'not-handled';
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
      });
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
            username: process.env.REACT_APP_watsonUSERNAME,
            password: process.env.REACT_APP_watsonPassword
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

        if (resp.data.sentences_tone !== undefined) {
          this.setState({
            sentence: resp.data.sentences_tone
          });
        }
        this.setState({
          sadness,
          anger,
          joy,
          analytical
        });
      });
  }

  renderHighlights() {
    if (this.state.sentence !== []) {
      let curStr = this.state.versions[this.state.versionsCounter].content;
      let regexStr = curStr.match(/[\s\w,'"]+(\!|\?|\.)/g);
      if (regexStr === undefined) {
        regexStr = curStr;
      }
      return this.state.sentence.map((tone, index) => (
        <div>{this.checkTone(tone, regexStr, index)}</div>
      ));
    } else return this.state.content;
  }

  checkTone(tone, regexStr, index) {
    let largestTone = this.setupClass(tone.tones);
    //let icon = this.rendericons(largestTone)

    if (tone.text.includes(regexStr[index].trim())) {
      if (largestTone === "joy") {
        return (
          <div className={largestTone}>
            <br />
            <i class="fas fa-smile-beam" />
            <br />
            {regexStr[index]}
            <br />
            <i class="fas fa-smile-beam" />
            <br />
            <br />
          </div>
        );
      } else if (largestTone === "anger") {
        return (
          <div className={largestTone}>
            <br />
            <i class="fas fa-angry" />
            <br />
            {regexStr[index]}
            <br />
            <i class="fas fa-angry" />
            <br />
            <br />
          </div>
        );
      } else if (largestTone === "sadness") {
        return (
          <div className={largestTone}>
            <br />
            <i class="fas fa-sad-tear" />
            <br />
            {regexStr[index]}
            <br />
            <i class="fas fa-sad-tear" />
            <br />
            <br />
          </div>
        );
      } else if (largestTone === "analytical") {
        return (
          <div className={largestTone}>
            <br />
            <i class="fas fa-surprise" />
            <br />
            {regexStr[index]}
            <br />
            <i class="fas fa-surprise" />
            <br />
            <br />
          </div>
        );
      }
    } else {
      return <div>{regexStr[index]}</div>;
    }
  }

  setupClass(tones) {
    let greatest = 0;
    let biggestObj = {};
    tones.forEach(tone => {
      if (greatest < tone.score) {
        greatest = tone.score;
        biggestObj = tone;
      }
    });

    return biggestObj.tone_id;
  }

  // save the content of the current content
  parseContent(content) {
    this.setState({ content: content.blocks[0].text });
  }

  saveVersion() {
    let id = this.state.id;
    let newVersion = {};
    this.parseContent(convertToRaw(this.state.editorState.getCurrentContent()));
    newVersion.content = this.state.content;

    axios
      .post(
        `https://dontemail.herokuapp.com/letters/updateLetter/${id}`,
        newVersion
      )
      .then(resp => {
        this.setletter(id);
        this.setState({ content: "" });
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
      anger: 0,
      sentence: []
    });
  }
  // render the save button based on the if the version is the most current version.
  onBoldClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
	};

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

  test() {
    if (this.state.sentence.length === 0) {
      return (
        <div>{this.state.versions[this.state.versionsCounter].content}</div>
      );
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
                  <Col md="1">
                    <Button onClick={this.onBoldClick}> Bold</Button>
                  </Col>
                </Row>
                <br />
                <Row className="rowTextArea-styles">
                  <Col md="6">
                    {/* <Editor
                  editorState={this.state.editorState}
                  onChange={() => this.onChange(
                /> */}
                    {/* <Input


                      className="controlTextarea-styles"
                      type="textarea"
                      placeholder={
                        this.state.versions[this.state.versionsCounter].content
                      }
                      name="content"
                      value={this.state.content}
                      onChange={this.handleChange}
                    /> */}
                    <div className="controlTextarea-styles">
                      <Editor

                        editorState={this.state.editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange}
                        placeholder={this.test()}
                        name="content"
                        value={this.state.content}
                      />
                      {this.renderHighlights()}
                    </div>
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
