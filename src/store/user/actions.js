import { SET_USER_CONDITIONS } from './types';

export const changeUserConditions = (payload) => ({
  type: SET_USER_CONDITIONS,
  payload,
});
