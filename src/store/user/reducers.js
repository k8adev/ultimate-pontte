import { SET_USER_CONDITIONS } from './types';

export const initialState = {
  condition: 0,
  termsCondition: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_CONDITIONS:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};
