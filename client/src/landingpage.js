import React, { Fragment, Component } from 'react'
import './public/assets/css/main.css'
import './public/assets/css/noscript.css'
import SignupModal from './components/signupmodal'
import { Modal } from "reactstrap"
class Landing extends Component {
  constructor(){
    super()
    this.state = {
        modal : false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle(){
    this.setState({ modal: !this.state.modal})
  }
  render(){
  return (
    <Fragment>

    <div id="wrapper">
    <header id="header">
              <div className="logo">
                <span className="icon fa-envelope"></span>
              </div>
              <div className="content">
                <div className="inner">
                  <h1>Coming Soon</h1>
                  <p>A fully responsive Landing page made by <br />
                      Don't Email Team
                    </p>
                </div>
              </div>
              <nav>
                <ul>


                  <li><a href="#about">About</a></li>
                  <li><a href="#contact" onClick={ this.toggle }>Signup</a></li>
                </ul>
              </nav>
            </header>

            <div id="main">


                <article id="about">
                  <h2 className="major">About</h2>
                  <span className="image main"><img src="images/pic03.jpg" alt="" /></span>
                  <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
                </article>

                {/* Signup modal  */}

              <SignupModal/>

            </div>

            <footer id="footer">
              <p className="copyright">&copy;Send Me Not. j</p>
            </footer>
        </div>


        <div id="bg"></div>

      </Fragment>
)
}
}
export default Landing
