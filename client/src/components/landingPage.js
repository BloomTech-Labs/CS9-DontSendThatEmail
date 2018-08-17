import React, { Fragment, Component } from "react";

import SignupModal from "./signupmodal";
import About from "./about";
import { Modal, Card, CardTitle } from "reactstrap";
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      modalAbout: false,
      modalSignup:false
    };
    this.toggleAbout = this.toggleAbout.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
  }

  toggleAbout() {
    this.setState({ modalAbout: !this.state.modalAbout });
  }
  toggleSignup() {
    this.setState({ modalSignup: !this.state.modalSignup });
  }
  render() {
    return (
      <Fragment>
        <Card id="wrapper">
          <CardTitle id="header">
            <div className="logo">
              <i class="far fa-envelope-open" />
            </div>
            <div className="content">
              <div className="inner">
                <h1>Coming Soon</h1>
                <p>
                  A fully responsive Landing page made by <br />
                  Don't Email Team
                </p>
              </div>
            </div>
            <nav>
              <ul>
                <li>
                  <a onClick={this.toggleAbout}>About</a>
                </li>
                <li>
                  <a onClick={this.toggleSignup}>Signup</a>
                </li>
              </ul>
            </nav>
          </CardTitle>

          <Modal
            isOpen={this.state.modalAbout}
            toggle={this.toggleAbout}
            className={this.props.className}
          >
            <About />
          </Modal>

          <Modal
            isOpen={this.state.modalSignup}
            toggle={this.toggleSignup}
            className={this.props.className}
          >
            <SignupModal />
          </Modal>
        </Card>

        <div id="bg" />
      </Fragment>
    );
  }
}
export default Landing;
