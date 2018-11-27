export const SET_AUTHED_USER = "SET_AUTHED_USER";

export const setAuthedUser = (userId) => {
  return {
    type: SET_AUTHED_USER,
    payload: userId,
  }
}