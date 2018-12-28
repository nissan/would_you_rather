import { LOAD_QUESTIONS, ADD_QUESTION } from "../actions/questions";

export const questions = (state = [], action) => {
  switch (action.type) {
    case LOAD_QUESTIONS:
      return action.questions;
    case ADD_QUESTION:
      return state.concat([action.question]);
    default:
      return state;
  }
};

export default questions;
