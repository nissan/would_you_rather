import React from "react";
import { withRouter} from "react-router-dom";

import { connect } from "react-redux";
import ViewAnsweredQuestion from "./ViewAnsweredQuestion";
import ViewUnansweredQuestion from "./ViewUnansweredQuestion";


export const ViewQuestionPage = props => {
  const { questionId, answer } = props;
  if (answer === undefined) return <ViewUnansweredQuestion questionId={questionId} />;
  else return <ViewAnsweredQuestion questionId={questionId} userAnswer={answer} />;
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
  return {
    questionId: question.id,
    answer: answerKey === undefined ? undefined : authedUser.answers[answerKey],
  };
};

export default withRouter(connect(mapStateToProps)(ViewQuestionPage));
