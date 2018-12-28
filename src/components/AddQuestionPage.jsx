import React from "react";
import { Form, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";

const AddQuestionPage = props => {
  const { authedUserId, onSubmitForm } = props;
  return (
    <React.Fragment>
      <Form onSubmit={onSubmitForm}>
        Would you rather
        <Input type="text" placeholder="Option 1" id="optionOne" />
        OR
        <Input type="text" placeholder="Option 2" id="optionTwo" />
        <Input type="hidden" id="authorId" value={authedUserId} />
        <Button type="submit">Save</Button>
      </Form>
    </React.Fragment>
  );
};

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
    console.log(question);
    dispatch(handleSaveQuestion(question));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddQuestionPage);
