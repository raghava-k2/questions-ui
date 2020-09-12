import { applyMiddleware, createStore, compose } from 'redux';
import getReducer from '../reducer';
import createSagaMiddleware from 'redux-saga';
import getSaga from '../saga';

export function getStore() {
    const reducer = getReducer();
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(getSaga);
    return store;
}