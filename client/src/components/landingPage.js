import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

import "./landingPage.css";
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
              <div id="heading">
                <CardTitle id="header">
                  <nav>
                    <a onClick={() => this.toggle("about")}>About</a>
                    <br />
                    <Link
                      to="/register"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      Sign Up
                    </Link>
                    <br />
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      Log In
                    </Link>
                  </nav>
                </CardTitle>

           
              </div>

              <div id="title" class="slide header">
                <h1>
                  Check my Tone <i className="far fa-envelope-open" />
                </h1>
                <br />
                <p>
                  The only solution You need to not regret sending that e-mail!
                </p>
              </div>

              <div id="slide1" class="slide">
                <div class="title">
                  <h1>Slide 1</h1>
                  <p>
                    Lorem ipsum dolor sit amet, in velit iudico mandamus sit,
                    persius dolorum in per, postulant mnesarchum cu nam. Malis
                    movet ornatus id vim, feugait detracto est ea, eam eruditi
                    conceptam in. Ne sit explicari interesset. Labores perpetua
                    cum at. Id viris docendi denique vim.
                  </p>
                </div>
              </div>

              <div id="slide2" class="slide">
                <div class="title">
                  <h4 className="boxtitle">
                    Ever wondered if Your message sounds right?
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, in velit iudico mandamus sit,
                    persius dolorum in per, postulant mnesarchum cu nam. Malis
                    movet ornatus id vim, feugait detracto est ea, eam eruditi
                    conceptam in. Ne sit explicari interesset. Labores perpetua
                    cum at. Id viris docendi denique vim.
                  </p>
                </div>
          
              </div>

              
            </Fragment>
          
        
  
    );
  }
}
export default Landing;
