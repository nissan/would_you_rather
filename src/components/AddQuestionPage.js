import React from "react";
import {
  Form,
  Input,
  Button,
  Card,
  CardTitle,
  CardBody,
  CardFooter
} from "reactstrap";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/shared";
import { withRouter } from "react-router-dom";
import { routes } from "../utils";

class AddQuestionPage extends React.Component {
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
    const { authedUserId } = this.props;
    return (
      <React.Fragment>
        <Form onSubmit={this.submitForm}>
          <Card>
            <CardTitle tag="h3">Would you rather</CardTitle>
            <CardBody>
              <Input type="text" placeholder="Option 1" id="optionOne" />
              OR
              <Input type="text" placeholder="Option 2" id="optionTwo" />
            </CardBody>
            <CardFooter>
              <Input type="hidden" id="authorId" value={authedUserId} />
              <Button type="submit">Save</Button>
            </CardFooter>
          </Card>
        </Form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { authedUserId: state.authedUserId };
};

const mapDispatchToProps = dispatch => ({
  onSubmitForm: e => {
    e.preventDefault();
    const question = {
      author: e.target.authorId.value,
      optionOneText: e.target.optionOne.value,
      optionTwoText: e.target.optionTwo.value
    };
    dispatch(handleSaveQuestion(question));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddQuestionPage)
);
