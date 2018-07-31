import { all, fork } from 'redux-saga/effects';
import { testSaga } from './TestSaga';
import { getSaga } from './getSaga';
import { itemsSaga } from './itemsSaga';
import { selectItem } from './selectedItem';
import { deleteItem } from './selectedItem';
export default function* rootSaga() {
  yield all([
    fork(testSaga),
    fork(itemsSaga),
    fork(getSaga),
    fork(selectItem),
    fork(deleteItem)
  ]);
}