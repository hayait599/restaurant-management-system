import 'regenerator-runtime/runtime';
import { takeEvery, put } from 'redux-saga/effects';
import axios from '../services/axios';
import { getItems, storeItems } from './../actions/index';

function* getItemsFunction() {
  try {
    const res = yield  axios.get('/items.json');
    const data = res.data;  
     yield put (storeItems(data));
  } catch (error) {
    yield console.log(error);
  }
}

export function* itemsSaga() {
  yield takeEvery(getItems, getItemsFunction);
}


