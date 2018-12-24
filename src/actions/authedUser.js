export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUser = (userId) => {
  return {
    type: LOGIN_USER,
    userId
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  }
}