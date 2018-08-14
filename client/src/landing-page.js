import React, { Fragment } from "react";
import {Link} from "react-router-dom"
import {
  NavbarBrand,
  Button,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  Jumbotron
} from "reactstrap";
const Landing = () => {
  return (
      // Fragment allows multiple lines of jsx code to be returned
      // https://reactjs.org/docs/fragments.html
    <Fragment>
      <div>
        <Navbar color="primary" light expand="md">
          <NavbarBrand href="/">Don't Email This</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to ="/signup"><Button color="success" href="/components/">
                Sign Up
              </Button></Link>
            </NavItem>
            <NavItem>
             <Link to="/login"> <Button
                color="success"
                href="https://github.com/reactstrap/reactstrap"
              >
                Log In
              </Button></Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>

      <div>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>

      <Navbar color="primary" light expand="md">
        <NavbarBrand href="/">Don't Email This</NavbarBrand>
        <Nav className="ml-auto" navbar />
      </Navbar>
    </Fragment>
  );
};
export default Landing;
