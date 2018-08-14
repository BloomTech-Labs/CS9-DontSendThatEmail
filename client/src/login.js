import React, {Component} from "react"
import {Row, Col, Card, CardBody, CardTitle, InputGroup, InputGroupAddon, InputGroupText, Input, Button, Label } from 'reactstrap';

class Login extends Component {
    constructor(){
      super(  )
      this.state = {

      }
    }
    render(){
      return (
        <Row>

        <Col sm="6">
        <div>login page</div>
      </Col>
        <Col sm="6">
        <Card>
          <CardBody>
            <Input placeholder="username" />

            <br />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
          </CardBody>
        </Card>
      </Col>
    
  </Row>
      )
    }


}

export default Login
