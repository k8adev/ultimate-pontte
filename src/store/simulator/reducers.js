export const initialState = {
  conditions: [],
  amounts: [],
  amountsTotal: [],
  terms: [],
  termsInstallments: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_SIMULATOR':
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};
