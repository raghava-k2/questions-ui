import { call, take, put } from 'redux-saga/effects'
import { Api } from '../api';

function* authorize() {
    try {
        const { data } = yield call(Api.getOktaRedirectUrl);
        yield put({ type: 'LOGIN_REDIRECT_URL', data });
        return null;
    } catch (error) {
        yield put({ type: 'LOGIN_REDIRECT_URL', error });
    }
}

export function* loginFlow() {
    while (true) {
        yield take('LOGIN');
        yield call(authorize);
        yield take('LOGOUT');
        yield call(authorize);
    }
}