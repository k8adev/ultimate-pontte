import { SET_SIMULATOR_MONTHLY } from './types';

export const getSimulatorConditions = () => ({
  type: 'GET_SIMULATOR',
});

// export const setSimulatorConditions = (payload) => {
//   console.log(payload, 'SET');
//   return {
//     type: 'SET_SIMULATOR',
//     payload,
//   };
// };

export const setSimulatorAmount = (value) => ({
  type: SET_SIMULATOR_MONTHLY,
  payload: {
    value,
  },
});
