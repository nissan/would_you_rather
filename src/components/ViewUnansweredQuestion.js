import React from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Input,
  Label,
  Button
} from "reactstrap";
import Avatar from "./Avatar";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { routes } from "../utils";
import { handleSaveQuestionAnswer } from "../actions/shared";

export class ViewUnansweredQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(e) {
    const { onSubmitForm, history } = this.props;
    onSubmitForm(e);
    history.push(routes.root);
  }
  render() {
    const { question, author, authedUserId } = this.props;
    return (
      <Form onSubmit={this.submitForm}>
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
                    <Input type="hidden" id="questionId" value={question.id} />
                    <Input
                      type="hidden"
                      id="authedUserId"
                      value={authedUserId}
                    />
                  </React.Fragment>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Button>Submit</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { questionId } = ownProps;

  const question = state.questions.find(question => question.id === questionId);
  const author = state.users.find(user => user.id === question.author);
  return {
    question,
    author,
    authedUserId: state.authedUserId
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmitForm: e => {
    e.preventDefault();
    const answer = e.target.answer1.checked
      ? e.target.answer1.value
      : e.target.answer2.value;
    dispatch(handleSaveQuestionAnswer(
      e.target.authedUserId.value,
      e.target.questionId.value,
      answer
    ));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewUnansweredQuestion)
);
