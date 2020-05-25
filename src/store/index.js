import {
  applyMiddleware,
  createStore,
  combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import simulator from './simulator/reducers';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({ simulator });

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;
