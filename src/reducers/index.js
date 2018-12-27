import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";

export const reducers = combineReducers({
  authedUserId: authedUser,
  users,
  questions
});

export default reducers;
