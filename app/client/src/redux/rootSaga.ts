import { all, fork } from 'redux-saga/effects';
import { getCharityRequestStart } from './charity/sagas';

export const rootSaga = function* root() {
  yield all([fork(getCharityRequestStart)]);
};
