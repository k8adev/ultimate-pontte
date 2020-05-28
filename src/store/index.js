import {
  applyMiddleware,
  createStore,
  combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import simulator from './simulator/reducers';
import user from './user/reducers';

import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({ simulator, user });
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;
