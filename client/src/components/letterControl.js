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
      versionCounter: 0
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
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
          destination: resp.data.destination
        });
        this.versionCounter();
      })
      .catch(err => {
        console.log(err);
      });
  }
  versionCounter() {
    this.setState({ versionCounter: this.state.versions.length - 1 });
  }


  render() {
    console.log("letters on state", this.state);
    const { auth } = this.props.context.userData;
    return (
      <Col md="7">
        {auth ? (
          <Card className="controlCard-styles">
            <CardBody>
              <br />
              <Row>
                <Col md="3">
                  <Input placeholder={this.state.name} />
                </Col>
                <Col md="2">
                  Edit 46/
                  {this.state.versions.length}
                </Col>
              </Row>
              <br />
              <Row>
                <Col md="3">
                  <Input placeholder={this.state.destination} />
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
                    placeholder={
                      this.state.versions[this.state.versionCounter].content
                    }
                  />
                </Col>
                <Col md="3">
                  <Label>Anger</Label>

                  <Progress color="danger" value="47">
                    25%
                  </Progress>
                  <br />
                  <Label>Joy</Label>

                  <Progress color="success" value="22">
                    25%
                  </Progress>
                  <br />
                  <Label>Saddness</Label>

                  <Progress value="99">25%</Progress>
                </Col>
              </Row>
              <br />
              <Row className="controlBtn-styles">
                <Col md="6">
                  <i className="fas fa-arrow-circle-left" />
                </Col>
                <Col md="6">
                  <i className="fas fa-arrow-circle-right" />
                </Col>
              </Row>
              <br />
              <Row className="controlBtn-styles">
                <Col md="6">
                  <Button>Cancel</Button>
                </Col>

                <Col md="6">
                  <Button>Save</Button>
                </Col>
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
