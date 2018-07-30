import 'regenerator-runtime/runtime';
import { takeEvery, put } from 'redux-saga/effects';
import { storeSelectedItem, selectIte } from './../actions/index';

function* getSelectedItem(action) {
  try {
    console.log("saga",action.payload);
    // const oldState = yield select()
    yield put(selectIte(action));
  } catch (error) {
    yield console.log(error);
  }
}

export function* selectItem() {
  yield takeEvery(storeSelectedItem, getSelectedItem );
}


