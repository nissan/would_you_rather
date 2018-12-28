import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addQuestion, handleLoadQuestions } from "./questions";
import { handleLoadUsers } from "./users";

export const handleSaveQuestionAnswer = (authedUserId, questionId, answer) => {
  return async dispatch => {
    await saveQuestionAnswer(authedUserId, questionId, answer);
    dispatch(handleLoadUsers());
    dispatch(handleLoadQuestions());
  };
};

export const handleSaveQuestion = question => {
  return async dispatch => {
    const savedQuestion = await saveQuestion(question);
    console.log(savedQuestion);
    // could use handleLoadQuestions here in case other questions by other users added, but assuming not frequent enough for the roundtrip call
    dispatch(addQuestion(savedQuestion)); 
    
    // could use an UPDATE_USER_SCORE type action, but leaderboard may be out of date as other users may have answered or created questions 
    // in time it took to submit this new question so chose to retrieve all new scores
    dispatch(handleLoadUsers()); 
  };
};
