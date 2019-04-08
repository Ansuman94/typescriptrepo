import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware } from 'redux';
import Reducers from '../Reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Saga';

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(
    Reducers,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default Store;
