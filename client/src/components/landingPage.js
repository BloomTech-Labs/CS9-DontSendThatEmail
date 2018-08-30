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
        <section className="features">
          <h3 className="title">Amazing Features</h3>

          <ul className="grid">
            <li>
              <i className="fas fa-save" />
              <h4>Store Multiple Edits</h4>
              <p>Save Multiple Edits and come back to them whenever You wish</p>
            </li>
            <li>
              <i className="fas fa-search" />
              <h4>Detailed Analysys</h4>
              <p>
                Get detailed analysys on Your message, whether it is official
                mail or one to the colleague You will be sure it has just the
                right <em>Tone</em>
              </p>
            </li>
            <li>
              <i className="fa fa-cubes" />
              <h4>Send Emails Directly</h4>
              <p>
                Copy the e-mail to the Check My Tone App and send it directly
                from here, no need to go to external services!
              </p>
            </li>
          </ul>
        </section>
        <section className="testimonials">
          <div className="text-box">
            <h3 className="title">What others say:</h3>

            <p className="quote">
              It's dope dawg, so dope i use it before i send any slack message,
              give it a try!
            </p>
            <p className="author">— Chris</p>

            <p className="quote">
              When i want to mock up fast e-mail to my Polish Friend Luke i
              always use Check My Tone to not sound angry anymore.
            </p>
            <p className="author">— Jacob</p>

            <p className="quote">
              Whether i need to skip work to play World of Warcraft i use Check
              My Tone to write proper mail to my higher ups thinking i have
              internet problems or i am in restroom. LOVE IT
            </p>
            <p className="author">— Imran</p>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default Landing;
