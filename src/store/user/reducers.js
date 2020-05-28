import { SET_USER_CONDITIONS } from './types';

export const initialState = {
  condition: 0,
  amount: 0,
  amountTotal: 0,
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
