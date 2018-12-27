import * as DATA from "../_DATA";

export const getUsers = async () => {
  const userData = await DATA._getUsers();
  const users = Object.keys(userData).map(key => userData[key]);
  console.log(users);
  return users;
};

export const getQuestions = async () => {
  const questionData = await DATA._getQuestions();
  const questions = Object.keys(questionData).map(key => questionData[key]);
  console.log(questions);
  return questions;
};

export const saveQuestion = async question => {
  DATA._saveQuestion(question);
};

export const saveQuestionAnswer = async (authedUser, qid, answer) => {
  DATA._saveQuestionAnswer(authedUser, qid, answer);
};
