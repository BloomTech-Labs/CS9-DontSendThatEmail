import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom"
import SignupModal from "./signupmodal";
import LogInModal from "./login";
import About from "./about";
import { Modal, Card, CardTitle } from "reactstrap";
import { TestContext } from "../contexts/test-context";// here
import axios from 'axios';
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
  watson(){
    const text = {
      text: "I love water"
      }
    axios.post("https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21",
        text,
     { auth: {
       username: watsonUSERNAME,
       password: watsonPASSWORD
     }
     })
      .then(resp=>{
        let sadness = 0
        let anger = 0
        let joy = 0
        let analytical = 0;

        resp.data.document_tone.tones.forEach(tone=>{
          if(tone.tone_id === "sadness"){
            sadness += Math.floor(tone.score * 100)
          }
          else if(tone.tone_id === "anger"){
            anger += Math.floor(tone.score * 100)
          }
          else if(tone.tone_id === "analytical"){
            analytical += Math.floor(tone.score * 100)
          }
          else if(tone.tone_id === "joy"){
            joy += Math.floor(tone.score * 100)
          }
        })
        console.log(sadness,anger,joy, analytical)
      })
      .catch(err => console.log(err))
  }

  render() {

    return (
    <TestContext.Consumer>
      {data => {
        return (

          <Fragment>
            {this.watson()}
        <Card id="wrapper">
          <CardTitle id="header">

                  {" "}
                  <i className="far fa-envelope-open" />
                  {data.header}


                <p>
                  Demo landing page made by <br />
                  Don't Email Team
                </p>

            <nav>
              <a onClick={() => this.toggle("about")}>About</a>
              <br />
              <Link to="/register">Sign Up</Link>
              <br />
              <Link to="/login">Log In</Link>
            </nav>
          </CardTitle>

          <Modal
            isOpen={this.state.modalAbout}
            toggle={() => this.toggle("about")}
            className={this.props.className}
            >
            <About />
          </Modal>



        </Card>

        <div id="bg" />
      </Fragment>
          )
      }}
  </TestContext.Consumer>
    );
  }
}
export default Landing;
