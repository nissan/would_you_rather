import React from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  Progress
} from "reactstrap";
import Avatar from "./Avatar";
import { connect } from "react-redux";

export const ViewAnsweredQuestion = props => {
  const { question, author, answer } = props;
  return (
    <Form>
      <Container fluid style={{ border: "2px solid blue" }}>
        <Row>
          <Col md={{ size: 1 }} style={{ marginTop: 20, paddingTop: 20 }}>
            <Avatar big picture={author.avatarURL} name={author.name} />
          </Col>
          <Col md={{ size: 8 }} style={{ marginTop: 20, paddingTop: 20 }}>
            <Card style={{ padding: 4, margin: 4 }}>
              <CardTitle tag="h3">Results</CardTitle>
              <CardSubtitle tag="h4">
                {author.name} asks: Would you rather
              </CardSubtitle>
              <CardBody>
                <React.Fragment>
                  <div>
                    {question.optionOne.text}
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
                        {((question.optionOne.votes.length /
                          (question.optionOne.votes.length +
                            question.optionTwo.votes.length)) *
                          100).toFixed(2)}
                        %
                        {answer === "optionOne" ? (
                          <strong>Your answer</strong>
                        ) : (
                          ""
                        )}
                      </span>
                    </Progress>
                  </div>
                  <div>OR</div>
                  <div>
                    {question.optionTwo.text}
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
                        {((question.optionTwo.votes.length /
                          (question.optionOne.votes.length +
                            question.optionTwo.votes.length)) *
                          100).toFixed(2)}
                        %
                        {answer === "optionTwo" ? (
                          <strong>Your answer</strong>
                        ) : (
                          ""
                        )}
                      </span>
                    </Progress>
                  </div>
                </React.Fragment>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};
const mapStateToProps = (state, ownProps) => {
  const { questionId } = ownProps;
  let answerKey = undefined;
  const authedUser = state.users.find(user => user.id === state.authedUserId);
  if (authedUser !== undefined) {
    answerKey = Object.keys(authedUser.answers).find(key => key === questionId);
  }
  const question = state.questions.find(question => question.id === questionId);
  const author = state.users.find(user => user.id === question.author);
  return {
    question: question,
    author,
    answer: answerKey === undefined ? undefined : authedUser.answers[answerKey]
  };
};
export default connect(mapStateToProps)(ViewAnsweredQuestion);
