import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { GET_SIMULATOR, SET_SIMULATOR } from './simulator/types';

function* getSimulatorConditions() {
  try {
    const {
      prazos: terms,
      parcelas: termsInstallments,
      valoresEmprestimo: amounts,
      valoresEmprestimeBruto: amountsTotal,
    } = yield call(() => fetch(API).then((response) => response.json()));

    const payload = {
      amounts,
      amountsTotal,
      terms,
      termsInstallments,
    };

    yield put({ payload, type: SET_SIMULATOR });
  } catch (exception) {
    throw new Error(exception);
  }
}

function* sagas() {
  yield takeLatest(GET_SIMULATOR, getSimulatorConditions);
}

export default sagas;
