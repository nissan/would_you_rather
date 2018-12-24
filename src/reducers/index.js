import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";

export const reducers = combineReducers({
  authedUserId: authedUser,
  users
});

export default reducers;
