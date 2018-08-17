import React, { Fragment, Component } from "react";

import SignupModal from "./signupmodal";
import LogInModal from "./login";
import About from "./about";
import { Modal, Card, CardTitle } from "reactstrap";
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      modalAbout: false,
      modalSignup: false,
      modalLogin: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(type) {
    if (type === "about") {
      this.setState({ modalAbout: !this.state.modalAbout });
    } else if (type === "sign up") {
      this.setState({ modalSignup: !this.state.modalSignup });
    } else {
      this.setState({ modalLogin: !this.state.modalLogin });
    }
  }

  render() {
    return (
      <Fragment>
        <Card id="wrapper">
          <CardTitle id="header">
        
                  {" "}
                  <i className="far fa-envelope-open" />
                  Coming Soon
             
                <p>
                  Demo landing page made by <br />
                  Don't Email Team
                </p>
           
            <nav>
              <a onClick={() => this.toggle("about")}>About</a>
              <br />
              <a onClick={() => this.toggle("sign up")}>Sign Up</a>
              <br />
              <a onClick={() => this.toggle("log in")}>Log In</a>
            </nav>
          </CardTitle>

          <Modal
            isOpen={this.state.modalAbout}
            toggle={() => this.toggle("about")}
            className={this.props.className}
          >
            <About />
          </Modal>

          <Modal
            isOpen={this.state.modalSignup}
            toggle={() => this.toggle("sign up")}
            className={this.props.className}
          >
            <SignupModal />
          </Modal>
          <Modal
            isOpen={this.state.modalLogin}
            toggle={() => this.toggle("log in")}
            className={this.props.className}
          >
            <LogInModal />
          </Modal>
        </Card>

        <div id="bg" />
      </Fragment>
    );
  }
}
export default Landing;
