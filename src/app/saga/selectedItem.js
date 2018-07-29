import 'regenerator-runtime/runtime';
import { takeEvery, put } from 'redux-saga/effects';
import { storeSelectedItem, select } from './../actions/index';

function* getSelectedItem(action) {
  try {
    yield put(select(action.payload));
  } catch (error) {
    yield console.log(error);
  }
}

export function* selectItem() {
  yield takeEvery(storeSelectedItem, getSelectedItem );
}


