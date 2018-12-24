import * as DATA from '../_DATA';


export const getUsers = async () => {
  const users = await DATA._getUsers();
  return users;
}

export const getQuestions = async() => {
  return await DATA._getQuestions();
}

export const saveQuestion = async (question) => {
  DATA._saveQuestion(question);
}

export const saveQuestionAnswer = async(authedUser, qid, answer) => {
  DATA._saveQuestionAnswer(authedUser, qid, answer);
}

