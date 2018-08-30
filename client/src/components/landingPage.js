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
    return (
      <Fragment>
        {" "}
        <header>
          <div className="logo" />
          <nav>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </nav>
        </header>
        <section className="hero">
          <h1>
            Check My Tone <span className="fas fa-check-square" />
          </h1>
          <h3>One Click Tone Analyzer</h3>
          <Link to="/register" className="cta-btn pulse">
            GET STARTED
          </Link>
        </section>
        <div className="howitworks">
          <section className="tone-work">
            <h3 className="title">How It Works</h3>
            <p>
              Ever wondered if Your message sounds right? With CheckMyTone You
              can check whether Your text has positive or negative vibes. With
              single buton click You can take complete control of situation.
            </p>

            <ul className="grid">
              <li className="small">
                <div className="small-caption">
                  <p>
                    Easy to use, start typing or copy text from the other source
                    into text input and then click Analyze
                  </p>
                </div>
              </li>
              <li className="large" />
              <li className="large" />
              <li className="small">
                <div className="small-caption">
                  <p>
                    Power to control Tone in the palm of Your hand with detailed
                    analysis
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </Fragment>
    );
  }
}
export default Landing;
