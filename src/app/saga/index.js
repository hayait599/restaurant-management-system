import { all, fork } from 'redux-saga/effects';
import { testSaga } from './TestSaga';
import { getSaga } from './getSaga';
import { itemsSaga } from './itemsSaga';
export default function* rootSaga() {
  yield all([
    fork(testSaga),
    fork(itemsSaga),
    fork(getSaga)
  ]);
}