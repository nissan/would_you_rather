import React from "react";
import { Container, Row, Col, Card, CardTitle, CardBody } from "reactstrap";
import Avatar from "./Avatar";

export const UserCard = props => {
  const { user } = props;
  const score = user.questions.length + Object.keys(user.answers).length;
  console.log(user);
  console.log(user.questions, user.answers, score);
  return (
    <Container fluid style={{ border: "1px solid black" }}>
      <Row style={{ border: "1px solid black" }}>
        <Col md={{ size: 1 }} style={{ borderRight: "1px solid black" }}>
          <Avatar big picture={user.avatarURL} name={user.name} />
        </Col>
        <Col md={{ size: 8 }} style={{ border: "1px solid black" }}>
          <Card style={{ padding: 4, margin: 4, border: "1px solid blue" }}>
            <CardTitle tag="h3">{user.name}</CardTitle>

            <CardBody>
              Answered Questions:{" "}
              <strong>{Object.keys(user.answers).length} </strong>
              <br />
              Created Questions: <strong>{user.questions.length}</strong> <br />
            </CardBody>
          </Card>
        </Col>
        <Col style={{ border: "2px solid black" }}>
          <Card style={{ padding: 4, margin: 4, border: "1px solid blue" }}>
            <CardTitle>Score</CardTitle>
            <CardBody tag="h3">{score}</CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCard;
