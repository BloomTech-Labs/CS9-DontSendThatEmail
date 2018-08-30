import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import SignupModal from "./signupmodal";
import LogInModal from "./login";
import About from "./about";
import "./landingPage.css";
import { Modal, Card, CardTitle } from "reactstrap";
import { TestContext } from "../contexts/test-context"; // here
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
    return <Fragment />;
  }
}
export default Landing;
