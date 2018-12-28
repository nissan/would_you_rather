import React from "react";
import { withRouter, Redirect} from "react-router-dom";

import { connect } from "react-redux";
import ViewAnsweredQuestion from "./ViewAnsweredQuestion";
import ViewUnansweredQuestion from "./ViewUnansweredQuestion";
import { routes } from "../utils";


export const ViewQuestionPage = props => {
  const { questionId, answer } = props;
  if (questionId===0) {
    return <Redirect to={routes.error} />
  }
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
  const questionId = question===undefined? 0:question.id;
  return {
    questionId,
    answer: answerKey === undefined ? undefined : authedUser.answers[answerKey],
  };
};

export default withRouter(connect(mapStateToProps)(ViewQuestionPage));
