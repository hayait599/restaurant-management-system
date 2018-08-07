import 'regenerator-runtime/runtime';
import { takeEvery, select, put } from 'redux-saga/effects';
import axios from '../services/axios';
import { order, selectIte, storeSelectedItem } from './../actions/index';

function* orderFunction() {
  try {
    const oldReddit = yield select();

//    console.log("orderNow", oldReddit);
   var id =  Math.floor(Math.random() * 9999);
   var order = {
       id: id,
       items: oldReddit.selectedItem,
       price: oldReddit.totalPrice
   }
    const items  = yield select(storeSelectedItem);
   if(order.price !== 0)
   {
    yield axios.post('/Orders.json',order);
    yield put(selectIte());
   }
   else{
       console.log(oldReddit);
       console.log("Please select items.");
   }
  
  } catch (error) {
    yield console.log(error);
  }
}

export function* orderSaga() {
  yield takeEvery(order, orderFunction);
}