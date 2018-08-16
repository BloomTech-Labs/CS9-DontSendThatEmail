import React, { Component, Fragment } from "react";
import { Card, CardTitle, Col,Row } from "reactstrap";
import { Link } from "react-router-dom";
import './dashboard.css'
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Col md="3">
          <Card className="">
        <CardTitle>Don't Send</CardTitle>
              <Link  style={{ textDecoration: 'none',color:"white" }}  to="/documents"><div className="link-mod"><i class="far fa-file"></i><div >Documents</div></div></Link>
            
              <Link  style={{ textDecoration: 'none',color:"white" }} to="/billing"><div className="link-mod" ><i class="fas fa-money-bill-wave-alt"></i><div>Billing</div></div></Link>
             
              <Link  style={{ textDecoration: 'none',color:"white" }} to="/dashboard/settings"><div  className="link-mod"><i class="fas fa-cogs"></i>

<div>Settings</div></div></Link>
           
           
          </Card>
        </Col>
      </Fragment>
    );
  }
}
export default Dashboard;


