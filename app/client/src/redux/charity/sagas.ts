import { call, put, takeLatest } from 'redux-saga/effects';
import { getCharitiesRequest } from '../../graphql/api_controllers/charity_api.controller';
import { getCharitySuccess, getCharityFailure } from './actions';

//eslint-disable-next-line
export function* getCharityRequestStart() {
  try {
    const charities = yield call(getCharitiesRequest);
    yield put(getCharitySuccess(charities));
  } catch (error) {
    yield put(getCharityFailure(error.message));
  }
}
