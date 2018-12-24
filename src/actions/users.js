import { getUsers } from "../utils/api";
export const LOAD_USERS = "LOAD_USERS";

export const loadUsers = users => {
  return {
    type: LOAD_USERS,
    users
  };
};

export const handleLoadUsers = () => {
  return async dispatch => {
    const users = await getUsers();
    dispatch(loadUsers(users));
  };
};
