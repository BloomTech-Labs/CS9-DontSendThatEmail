import React, { Component,Fragment } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  CardSubtitle,
  CardText
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./documents.css";
import AddLetter from "./addLetter";
class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: []
    };
  }
  componentDidMount() {
    //let id = this.props.context.userData.id
    
    console.log("mounted",localStorage.getItem("token"))
    axios
      .get(`https://dontemail.herokuapp.com/letters`, {
        headers: { "Authorization": localStorage.getItem("token") }
      })
      .then(resp => {
        console.log(resp.data.letters);
        this.setState({ letters: resp.data.letters });
      }).catch(err =>{
        console.log(err)
      })

  }
 
  listDocuments() {
    console.log("i ran list documents")
    return this.state.letters.map(letter => (
      <Fragment>
      <Col md="4">
        <Card className="documents-style">
          <CardBody>
            <CardTitle>{letter.name}</CardTitle>

            <br />
            <CardSubtitle>{letter.destination}</CardSubtitle>
            <br />
            <CardText>
              {letter.versions[letter.versions.length -1].content}
            </CardText>

            <Link to="/dashboard/create">
              <Button>Copy</Button>
            </Link>
          </CardBody>
        </Card>
      </Col>
    </Fragment>));
  }

  render() {
    const { auth } = this.props.context.userData;

    return (
      <div>
        {auth ? (
          <Col md="8">
            <Row>{this.listDocuments()}</Row>
            <AddLetter {...this.props} />
          </Col>
        ) : (
          this.props.history.push("/")
        )}
      </div>
    );
  }
}

export default Documents;
