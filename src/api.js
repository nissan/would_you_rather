import * as DATA from './_DATA';

export const getInitialData = async () => {
  const users = await DATA._getUsers()
  const questions = await DATA._getQuestions();
  return {users, questions}

}

export const saveQuestion = async (question) => {
  DATA._saveQuestion(question);
}

export const saveQuestionAnswer = async(authedUser, qid, answer) {
  DATA._saveQuestionAnswer(authedUser, qid, answer);
}

