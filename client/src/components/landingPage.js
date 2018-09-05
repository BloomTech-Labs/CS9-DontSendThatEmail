import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import SignupModal from "./signupmodal";
import LogInModal from "./login";
import About from "./about";
import "./landingPage.css";
import { Modal, Card, CardTitle, Row } from "reactstrap";
import { TestContext } from "../contexts/test-context"; // here
import Fade from "react-reveal/Fade";

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
          {/* <h3>One Click Tone Analyzer</h3> */}
          <div class="sp-container">
            <div class="sp-content">
              <div class="sp-globe" />

              <h2 class="frame-5">
                <span>Write </span>
                <span>Analyze </span>
                <span>Send</span>
              </h2>
            </div>
          </div>
          <Link to="/register" className="cta-btn">
            GET STARTED
          </Link>

          <i className="arrow animated bounce fas fa-angle-down fa-3x" />
        </section>
        <div className="howitworks" id="how">
          {/* <section className="tone-work">
            <Fade top>
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
                      Easy to use, start typing or copy text from the other
                      source into text input and then click Analyze
                    </p>
                  </div>
                </li>
                <li className="large" />
                <li className="large" />
                <li className="small">
                  <div className="small-caption">
                    <p>
                      Power to control Tone in the palm of Your hand with
                      detailed analysis
                    </p>
                  </div>
                </li>
              </ul>
            </Fade>
          </section> */}
          <section className="tonework">
            <Fade top>
              <h3 className="title">How It Works</h3>
              <div class="container">
                <div className="row circ">
                  <div className="col-md-8 d-flex align-items-center mt-2">
                    <div class="circle-icon mr-4">1</div>
                    <div class="media-body">
                      <h5>Register New Account</h5>
                      <p>
                        Simply click{" "}
                        <Link to="/register" className="anchor">
                          here
                        </Link>{" "}
                        to register a new account and start using <b>Check My Tone</b>
                        &nbsp;instantly. Login with your account and create a new
                        document.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 my-2">
                    <i class="fas fa-sign-in-alt fa-5x hiw-icon" />
                  </div>
                </div>
                <div className="row circ">
                  <div className="col-md-8 d-flex align-items-center my-4">
                    <div class="circle-icon mr-4">2</div>
                    <div class="media-body">
                      <h5>Write And Analyze</h5>
                      <p>
                        Start writing your message by filling in the necessary
                        fields and when you are ready hit <b>"Analyze"</b>. Our
                        application will do all the magic and assess the Tone of
                        your statement.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mt-4">
                    <i class="fas fa-glasses fa-5x hiw-icon" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 d-flex align-items-center mt-4">
                    <div class="circle-icon mr-4">3</div>
                    <div class="media-body">
                      <h5>And You Are Done!</h5>
                      <p>
                        And that's it! You can view a detailed report by pressing
                        "Details" or directly send your message as an e-mail from the
                        Check My Tone application.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mt-4">
                    <i class="fas fa-clipboard-check fa-5x hiw-icon" />
                  </div>
                </div>
              </div>
            </Fade>
          </section>
        </div>
        <section className="features">
          <Fade top>
            <h3 className="title">Additional Features</h3>

            <ul className="grid">
              <li>
                <i className="fas fa-save" />
                <h4>Store Multiple Edits</h4>
                <p>
                  Save <b>multiple edits</b> and come back to them whenever you wish right where you left off
                </p>
              </li>
              <li>
                <i className="fas fa-search" />
                <h4>Detailed Analysis</h4>
                <p>
                  Get <b>detailed analysis</b> on your messages, whether it is a professional
                  e-mail to your boss or a casual e-mail to a friend, you will be sure it has just 
                  the right <b><em>Tone</em></b>
                </p>
              </li>
              <li>
                <i className="fa fa-cubes" />
                <h4>Send Emails Directly</h4>
                <p>
                  Create your e-mail instantly with the Check My Tone app and <b>send it directly</b>
                  &nbsp;from here, no need to use external services!
                </p>
              </li>
            </ul>
          </Fade>
        </section>
        <section className="testimonials">
          <Fade top>
            <div className="text-box">
              <h3 className="title">What others say:</h3>

              <p className="quote">
                It's dope dawg, so dope i use it before i send any slack
                message, give it a try!
              </p>
              <p className="author">— Chris</p>

              <p className="quote">
                When i want to mock up fast e-mail to my Polish Friend Luke i
                always use Check My Tone to not sound angry anymore.
              </p>
              <p className="author">— Jacob</p>

              <p className="quote">
                Whether i need to skip work to play World of Warcraft i use
                Check My Tone to write proper mail to my higher ups thinking i
                have internet problems or i am in restroom. LOVE IT
              </p>
              <p className="author">— Imran</p>
            </div>
          </Fade>
        </section>
      </Fragment>
    );
  }
}
export default Landing;
