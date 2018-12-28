import React from "react";
import { withRouter, Link } from "react-router-dom";
import { routes } from "../utils";
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Button,
  Form,
  Input,
  Label,
  Progress,
  Container,
  Row,
  Col
} from "reactstrap";
import { connect } from "react-redux";

import Avatar from "./Avatar";

export const ViewQuestionPage = props => {
  const { question, answer, author } = props;
  return (
    <Form>
      <Container fluid style={{ border: "2px solid blue" }}>
        <Row>
          <Col md={{ size: 1 }} style={{ marginTop: 20, paddingTop: 20 }}>
            <Avatar big picture={author.avatarURL} name={author.name} />
          </Col>
          <Col md={{ size: 8 }} style={{ marginTop: 20, paddingTop: 20 }}>
            <Card style={{ padding: 4, margin: 4 }}>
              <CardTitle tag="h3">
                {author.name} asks: Would you rather
              </CardTitle>

              <CardBody>
                <React.Fragment>
                  <div>
                    {answer === "optionOne" ? (
                      <Input
                        type="radio"
                        id="answer1"
                        name="answer"
                        value="optionOne"
                        defaultChecked
                      />
                    ) : (
                      <Input
                        type="radio"
                        id="answer1"
                        name="answer"
                        value="optionOne"
                      />
                    )}
                    <Label for="answer1">{question.optionOne.text} </Label>
                  </div>
                  <div>OR</div>
                  <div>
                    {answer === "optionTwo" ? (
                      <Input
                        type="radio"
                        id="answer2"
                        name="answer"
                        value="optionTwo"
                        defaultChecked
                      />
                    ) : (
                      <Input
                        type="radio"
                        id="answer2"
                        name="answer"
                        value="optionTwo"
                      />
                    )}

                    <Label for="answer2">{question.optionTwo.text}</Label>
                  </div>
                </React.Fragment>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            {" "}
            <Button color="info" style={{ margin: 10, padding: 10 }}>
              <Link
                to={`${routes.questions}${question.id}`}
                style={{ color: "white" }}
              >
                View Poll
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
      <Card>
        <CardTitle>
          <Avatar picture={author.avatarURL} name={author.name} />
          {author.name} asks: Would you rather
        </CardTitle>
        <CardBody>
          {answer === "optionOne" && (
            <React.Fragment>
              <div>
                <Input
                  type="radio"
                  id="answer1"
                  name="answer"
                  value="optionOne"
                  defaultChecked
                />
                <Label for="answer1">{question.optionOne.text} </Label>
              </div>
              <div>OR</div>
              <div>
                <Input
                  type="radio"
                  id="answer2"
                  name="answer"
                  value="optionTwo"
                />
                <Label for="answer2">{question.optionTwo.text}</Label>
              </div>
            </React.Fragment>
          )}
          {answer === "optionTwo" && (
            <React.Fragment>
              <div>
                <Input
                  type="radio"
                  id="answer1"
                  name="answer"
                  value="optionOne"
                />
                <Label for="answer1">{question.optionOne.text} </Label>
              </div>
              <div>OR</div>
              <div>
                <Input
                  type="radio"
                  id="answer2"
                  name="answer"
                  value="optionTwo"
                  defaultChecked
                />
                <Label for="answer2">{question.optionTwo.text}</Label>
              </div>
            </React.Fragment>
          )}
          <Input type="hidden" id="questionId" value={question.id} />
        </CardBody>
        <CardFooter>
          {(answer === "optionOne" || answer === "optionTwo") && (
            <React.Fragment>
              <Progress
                striped
                color="success"
                value={
                  (question.optionOne.votes.length /
                    (question.optionOne.votes.length +
                      question.optionTwo.votes.length)) *
                  100
                }
              >
                <span style={{ color: "black", padding: 4, margin: 4 }}>
                  {question.optionOne.text}:{" "}
                  {(question.optionOne.votes.length /
                    (question.optionOne.votes.length +
                      question.optionTwo.votes.length)) *
                    100}
                  %
                </span>
              </Progress>
              <br />
              <Progress
                striped
                color="success"
                value={
                  (question.optionTwo.votes.length /
                    (question.optionOne.votes.length +
                      question.optionTwo.votes.length)) *
                  100
                }
              >
                <span style={{ color: "black", padding: 4, margin: 4 }}>
                  {question.optionTwo.text}:{" "}
                  {(question.optionTwo.votes.length /
                    (question.optionOne.votes.length +
                      question.optionTwo.votes.length)) *
                    100}
                  %
                </span>
              </Progress>
            </React.Fragment>
          )}
          {(answer === undefined || answer === "") && <Button>Submit</Button>}
        </CardFooter>
      </Card>
    </Form>
  );
};

const mapStateToProps = (state, ownProps) => {
  let answerKey = undefined;
  const authedUser = state.users.find(user => user.id === state.authedUserId);
  if (authedUser !== undefined) {
    answerKey = Object.keys(authedUser.answers).find(
      key => key === ownProps.match.params.id
    );
  }
  const question = state.questions.find(
    question => question.id === ownProps.match.params.id
  );
  const author = state.users.find(user => user.id === question.author);
  return {
    question,
    answer: answerKey === undefined ? "" : authedUser.answers[answerKey],
    author
  };
};

export default withRouter(connect(mapStateToProps)(ViewQuestionPage));
