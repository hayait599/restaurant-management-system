//Sagas Modules
import { all, fork } from 'redux-saga/effects';
//Sagas
import { testSaga } from './TestSaga';
import { getSaga } from './getSaga';
import { itemsSaga } from './itemsSaga';
import { selectItem } from './selectedItem';
import { deleteItem } from './selectedItem';
import { orderSaga } from './orderSaga';
export default function* rootSaga() {
  yield all([
    fork(testSaga),
    fork(itemsSaga),
    fork(getSaga),
    fork(selectItem),
    fork(deleteItem),
    fork(orderSaga)
  ]);
}