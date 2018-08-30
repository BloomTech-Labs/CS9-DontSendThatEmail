import React, { Component, Fragment } from "react";
import { Card, CardTitle, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./dashboard.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth } = this.props.context.userData;
    console.log(this.props);
    // if (!auth){

    // this.props.history.push('/')
    // }

    // console.log('props',   this.props)
    // console.log(auth)

    return (
      <Col md="3">
        {auth ? (
          <Fragment>
            <Card className="dashboardnav-styles">
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                <CardTitle>Don't Send</CardTitle>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/dashboard/documents"
              >
                <div className="link-mod">
                  <i className="far fa-file" />
                  <div>Documents</div>
                </div>
              </Link>

              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/dashboard/billing"
              >
                <div className="link-mod">
                  <i className="fas fa-money-bill-wave-alt" />
                  <div>Billing</div>
                </div>
              </Link>

              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/dashboard/settings/options"
              >
                <div className="link-mod">
                  <i className="fas fa-cogs" />

                  <div>Settings</div>
                </div>
              </Link>

              <Link onClick={() => localStorage.removeItem("token")}
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="link-mod">
                  <i className="fa fa-power-off" />
                  <div>Log Out</div>
                </div>
              </Link>
            </Card>
          </Fragment>
        ) : (
          this.props.history.push("/dashboard/create")
        )}
      </Col>
    );
  }
}
export default Dashboard;
