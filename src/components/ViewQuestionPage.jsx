import React from "react";
import { withRouter } from "react-router-dom";
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Button,
  Form,
  Input,
  Label,
  Progress
} from "reactstrap";
import { connect } from "react-redux";
import Avatar from "./Avatar";

export const ViewQuestionPage = props => {
  const { question, answer, author } = props;
  return (
    <Form>
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
          {(answer === undefined || answer === "") && (
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
                  {question.optionOne.text}: {(question.optionOne.votes.length /
                    (question.optionOne.votes.length +
                      question.optionTwo.votes.length)) *
                  100}%
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
                  {question.optionTwo.text}: {(question.optionTwo.votes.length /
                    (question.optionOne.votes.length +
                      question.optionTwo.votes.length)) *
                  100}%
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
