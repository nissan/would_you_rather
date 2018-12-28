import { saveQuestionAnswer } from "../utils/api";
import { handleLoadUsers } from "./users";
import { handleLoadQuestions } from "./questions";

export const handleSaveQuestionAnswer = (authedUserId, questionId, answer) => {
  return async dispatch => {
    await saveQuestionAnswer(authedUserId, questionId, answer);
    dispatch(handleLoadUsers());
    dispatch(handleLoadQuestions());
  };
};
