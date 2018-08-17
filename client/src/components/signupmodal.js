import React, {Component} from "react"
import { Row, Col, Card, CardBody, CardTitle, InputGroup, InputGroupAddon, InputGroupText, Input, Button, Label } from 'reactstrap';
import { Link } from 'react-router-dom'
class Signup extends Component {
    constructor(){
      super(  )
      this.state = {

      }
    }
    render(){
      return (

       

        <Card>
          <CardBody>
            <Input placeholder="username" />

            <br />
            <Input placeholder="password" />
            <br />
            <Input placeholder="email" />

            <Link to="/dashboard"><Button>Signup</Button></Link>
          </CardBody>
        </Card>


      )
    }


}

export default Signup
