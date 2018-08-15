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
        <Row>

        <Col sm="6">
        <div>Signup page</div>
      </Col>
        <Col sm="6">
        <Card>
          <CardBody>
            <Input placeholder="username" />

            <br />
            <Input placeholder="password" />
            <br />
            <Input placeholder="email" />

            <Button>Signup</Button>
          </CardBody>
        </Card>
      </Col>

  </Row>
      )
    }


}

export default Signup
