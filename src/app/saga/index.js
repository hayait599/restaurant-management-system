import { all, fork } from 'redux-saga/effects';
import { testSaga } from './TestSaga';

export default function* rootSaga() {
  yield all([
    fork(testSaga),
  ]);
}