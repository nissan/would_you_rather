import { LOGIN_USER, LOGOUT_USER } from "../actions/authedUser";

export const authedUser = (state = "", action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.userId;
    case LOGOUT_USER:
      return "";
    default:
      return state;
  }
};

export default authedUser;
