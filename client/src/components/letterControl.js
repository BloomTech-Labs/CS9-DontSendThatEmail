import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Col,
  Input,
  Row,
  Progress,
  Label
} from "reactstrap";
import "./letterControl.css";
import { Link } from "react-router-dom";

class LetterControl extends Component {
  constructor(props){
    super(props);
      this.state = {};
  }

  render() {
    console.log(this.props)
    const { auth } = this.props.context.userData;
    return (
      <div>
        {auth ? (
          <Col md="7">
            <Card className="controlCard-styles">
              <CardBody>
                <br />
                <Row>
                  <Col md="3">
                    <Input placeholder="Name" />
                  </Col>
                  <Col md="2">Edit 46/46</Col>
                </Row>
                <br />
                <Row>
                  <Col md="3">
                    <Input placeholder="to" />
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
                      placeholder="Content..."
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
          </Col>
        ) : (
          this.props.history.push("/")
        )}
      </div>
    );
  }
}
export default LetterControl;
