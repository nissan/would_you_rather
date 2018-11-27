import {getInitialData} from '../api';
import {receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser} from './authedUser';

const AUTHED_ID = "tylermcginnis"

export const handleInitialData = () => {
  return async (dispatch) => {
    const {users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(setAuthedUser(AUTHED_ID));
  }
}