import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Button, Col, Input, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Checkout from "./checkout.js";
import "./settings.css"
class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { auth } = this.props.context.userData;

    return (
      <Col md="10" classname="colBox-styles">
        {auth ? (
          <Fragment>
            <Card>
              <CardBody>
                <br />
                <Row>
                  <Col md="12">
                    <h1>Subscribe for a Monthly Plan</h1>
                  </Col>
                  <Col md="12">
                    <p>Unlimited Analysys</p>
                    <p>Up to 50 drafts</p>
                    <p>Only 9$ month!</p>
                  </Col>
                  <br />
                  <Col md="12">
                    <Checkout
                      name={"Premium Subscription"}
                      description={"1 month reccuring"}
                      amount={9}
                    />{" "}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Fragment>
        ) : (
          this.props.history.push("/")
        )}
      </Col>
    );
  }
}
export default Billing;
