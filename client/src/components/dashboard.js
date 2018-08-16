import React, { Component, Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Link } from "react-router-dom";
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Col md="3">
          <Card className="">
            <CardBody>
              <Link to="/documents">Documents</Link>
              <br />
              <Link to="/billing">Billing</Link>
              <br />
              <Link to="/dashboard/settings">Settings</Link>
              <br />
            </CardBody>
          </Card>
        </Col>
      </Fragment>
    );
  }
}
export default Dashboard;


