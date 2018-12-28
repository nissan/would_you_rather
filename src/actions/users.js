import { getUsers } from "../utils/api";
export const LOAD_USERS = "LOAD_USERS";
export const UPDATE_USER = "UPDATE_USER";

export const loadUsers = users => {
  return {
    type: LOAD_USERS,
    users
  };
};

export const updateUser = user => {
  return {
    type: UPDATE_USER,
    user,
  }
}

export const handleLoadUsers = () => {
  return async dispatch => {
    const users = await getUsers();
    dispatch(loadUsers(users));
  };
};
