import { SET_SIMULATOR_MONTHLY } from './types';

export const initialState = {
  conditions: {
    installments: [],
    terms: [],
    amount: [],
    amountTotal: [],
  },
  amount: {
    min: 100,
    max: 0,
    total: 0,
  },
  monthly: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SIMULATOR_MONTHLY:
      return {
        ...state,
        amount: {
          ...state.amount,
          total: payload.value * 2,
        },
      };

    case 'SET_SIMULATOR':
      return {
        ...state,
        conditions: payload,
      };

    default:
      return state;
  }
};
