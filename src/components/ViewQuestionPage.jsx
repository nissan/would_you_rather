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
  Label
} from "reactstrap";
import { connect } from "react-redux";

export const ViewQuestionPage = props => {
  const { question, answer } = props;
  return (
    <Form>
      <Card>
        <CardTitle>Would you rather</CardTitle>
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
          {(answer === undefined || answer==="") && (
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
          <Button>Submit</Button>
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
  return {
    question: state.questions.find(
      question => question.id === ownProps.match.params.id
    ),
    answer: answerKey === undefined ? "" : authedUser.answers[answerKey]
  };
};

export default withRouter(connect(mapStateToProps)(ViewQuestionPage));
