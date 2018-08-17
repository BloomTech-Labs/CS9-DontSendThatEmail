import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  CardSubtitle,
  CardText,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
const Document = () => {
  return (
      <Col md="4">
    <Card className="documents-style">
      <CardBody>
        <CardTitle>About Project health</CardTitle>

        <br />
        <CardSubtitle>Lambda Student</CardSubtitle>
        <br />
        <CardText>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione{" "}
        </CardText>

        <Link to="/dashboard">
          <Button>Copy</Button>
        </Link>
      </CardBody>
    </Card>
    </Col>
  );
};
export default Document;
