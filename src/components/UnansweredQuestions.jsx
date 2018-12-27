import React from "react";
import { connect } from "react-redux";
import QuestionSummaryCard from "./QuestionSummaryCard";

export const UnansweredQuestions = props => {
  const { users, unansweredQuestions } = props;
  return (
    <React.Fragment>
      {unansweredQuestions.map(question => {
        const user = users.find(user => user.id === question.author);
        return (
          <React.Fragment key={question.id}>
            <QuestionSummaryCard
              avatarUrl={user.avatarURL}
              name={user.name}
              questionId={question.id}
              optionsSummaryText={question.optionOne.text
                .substring(0, 20)
                .concat("...")}
            />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const authedUser = state.users.find(user => user.id === state.authedUserId);
  const unansweredQuestions = [];
  const answeredQuestions = Object.keys(authedUser.answers).map(key =>
    state.questions.find(question => question.id === key)
  );
  state.questions.forEach(question => {
    let found = false;
    answeredQuestions.forEach(answeredQuestion => {
      if (question.id === answeredQuestion.id) {
        found = true;
      }
    });
    if (!found) {
      if (
        unansweredQuestions.find(
          unansweredQuestion => unansweredQuestion.id === question.id
        ) === undefined
      ) {
        unansweredQuestions.push(question);
      }
    }
  });
  return {
    users: state.users,
    unansweredQuestions
  };
};

export default connect(mapStateToProps)(UnansweredQuestions);
