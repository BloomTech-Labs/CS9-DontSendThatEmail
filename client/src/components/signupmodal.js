import  React, { Component, Fragment } from 'react'
import { Modal } from "reactstrap"


class SignupModal extends Component{
  state = {

  }

  render(){
      return(


            <Fragment>
              <article id="contact">
              <h2 className="major">Signup</h2>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>

                </div>
                <ul className="actions">
                  <li><input type="submit" value="Signup" className="primary" /></li>

                </ul>
              </form>
              <ul className="icons">
                <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
              </ul>
            </article>
            </Fragment>

      )
  }

}

export default SignupModal
