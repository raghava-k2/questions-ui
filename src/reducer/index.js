import { combineReducers } from "redux"
import { login } from './loginReducer';

export default function getReducer() {
    return combineReducers({ login });
}