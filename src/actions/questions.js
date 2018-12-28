import { getQuestions, saveQuestion } from "../utils/api";
export const LOAD_QUESTIONS = "LOAD_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export const addQuestion = question => {
  return {
    type: ADD_QUESTION,
    question
  };
};


export const loadQuestions = questions => {
  return {
    type: LOAD_QUESTIONS,
    questions
  };
};

export const handleLoadQuestions = () => {
  return async dispatch => {
    const questions = await getQuestions();
    dispatch(loadQuestions(questions));
  };
};

export const handleSaveQuestion = (question) => {
  return async dispatch => {
    const savedQuestion = await saveQuestion(question);
    console.log(savedQuestion);
    dispatch(addQuestion(savedQuestion));
  }
}
