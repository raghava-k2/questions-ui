import { all } from "redux-saga/effects";
import { loginFlow } from "./loginSaga";

export default function* getSaga() {
    yield all([
        loginFlow(),
    ]);
}