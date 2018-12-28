import React from "react";
import { Container, Row, Col, Card, CardTitle, CardBody } from "reactstrap";
import Avatar from "./Avatar";

export const UserCard = props => {
  const { user } = props;
  const score = user.questions.length + Object.keys(user.answers).length;
  return (
    <Container fluid style={{ border: "2px solid blue",marginTop:10, paddingTop:10 }}>
      <Row>
        <Col md={{ size: 1 }} style={{marginTop:20, paddingTop:20 }}>
          <Avatar big picture={user.avatarURL} name={user.name} />
        </Col>
        <Col md={{ size: 8 }} style={{marginTop:10, paddingTop:10 }} >
          <Card style={{ padding: 4, margin: 4}}>
            <CardTitle tag="h3">{user.name}</CardTitle>

            <CardBody>
              Answered Questions:{" "}
              <strong>{Object.keys(user.answers).length} </strong>
              <br />
              Created Questions: <strong>{user.questions.length}</strong> <br />
            </CardBody>
          </Card>
        </Col>
        <Col style={{marginTop:10, paddingTop:10 }} >
          <Card style={{ padding: 4, margin: 4}}>
            <CardTitle>Score</CardTitle>
            <CardBody tag="h3">{score}</CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCard;
