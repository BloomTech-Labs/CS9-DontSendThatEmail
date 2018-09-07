import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./documents.css";
import AddLetter from "./addLetter";
import AddResume from "./addresume";
class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: [],
      deleteIds:[]
    };
  }
  componentDidMount() {
    //let id = this.props.context.userData.id

    axios
      .get(`https://dontemail.herokuapp.com/letters`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(resp => {
        this.setState({ letters: resp.data.letters });
      })
      .catch(err => {});
  }

  handleChange=(id,e)=> {
    var checked = e.target.checked;
    if(checked ===true){
      this.state.deleteIds.push(id)
     
    }else {
     let filteredArr = this.state.deleteIds.filter(stateId => {
      return stateId !==id
       
     })
     this.setState({deleteIds:filteredArr})
    }
    console.log(this.state.deleteIds)
  }
  listDocuments() {
    return this.state.letters.map(letter => (
      <Fragment>
        <div className="letterBox">
        <input type="checkbox" 
   name={this.props.name} 
   defaultChecked={this.props.defaultChecked} 
   onChange={this.handleChange.bind(this,letter._id) } />
          <Link className="tablerow" to={`/dashboard/create/${letter._id}`}>
            <div className="letter-name">{letter.name}</div>
            <time className="time">August 19</time>
          </Link>
          <div className="databox-icons">
            <i class="fa fa-trash" aria-hidden="true" />
            <i class="far fa-copy" />
            <i class="fas fa-ellipsis-v" />
          </div>
        </div>
      </Fragment>
    ));
  }

  render() {
    const { auth } = this.props.context.userData;
console.log(this.state.deleteIds)
    return (
      <Col className="documentsbox" md="10">
        {auth ? (
          <Fragment>
            <Row className="databox">
              <Row className="header-row">
                <div className="header-text">
                  <div className="textstuff">Subject</div>
                  <div className="textstuff">Created at</div>
                </div>
            >
              </Row>
              <Row className="listsofdocuments">{this.listDocuments()}</Row>
            </Row>
          </Fragment>
        ) : (
          this.props.history.push("/")
        )}
      </Col>
    );
  }
}

export default Documents;
