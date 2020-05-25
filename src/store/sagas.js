/* eslint-disable */
import { call, put, takeLatest } from 'redux-saga/effects';

function* getSimulatorConditions() {
   try {
      const {
        parcelas: installments,
        prazos: terms,
        valoresEmprestimo: amount,
        valoresEmprestimeBruto: amountTotal,
      } = yield call(() => fetch('https://testfrontend.pontte.com.br/').then(response => response.json()));

      const payload = {
        installments,
        terms,
        amount,
        amountTotal,
      };

      yield put({ payload, type: 'SET_SIMULATOR' });
   } catch (exception) {
      throw new Error(exception);
   }
}

function* mySaga() {
  yield takeLatest('GET_SIMULATOR', getSimulatorConditions);
}

export default mySaga;