import 'regenerator-runtime/runtime';
import { takeEvery, put, select } from 'redux-saga/effects';
import { storeSelectedItem, selectIte, storeTotalPrice, deleteSelectedItem } from './../actions/index';

function* getSelectedItem(action) {
  try {
    const oldReddit = yield select(storeSelectedItem);
    // console.log("saga", oldReddit.payload.selectedItem);
    const items = oldReddit.payload.selectedItem;
    var totalPrice = 0;
    for(var x in items ){
      totalPrice+=items[x].item.price;
    }
    // console.log("totalPrice",totalPrice);
    // console.log("get selected item",action);
    yield put(selectIte(action));
    yield put(storeTotalPrice(totalPrice));
  } catch (error) {
    yield console.log(error);
  }
}

function* deleteItemSelected(action) {
  try{
     const oldReddit = yield select();
     var arr = oldReddit.selectedItem;
     var index = arr.indexOf(oldReddit.deleteItem)
     arr.splice(index, 1);
     const oldReddit2 = yield select(storeSelectedItem);
    // console.log("saga", oldReddit.payload.selectedItem);
    const items = oldReddit2.payload.selectedItem;
    var totalPrice = 0;
    for(var x in items ){
      totalPrice+=items[x].item.price;
    }
    yield put(storeTotalPrice(totalPrice));

   
    
  }
  catch(err){
    yield console.log(err);
  }
}

export function* selectItem() {
  yield takeEvery(storeSelectedItem, getSelectedItem );
}
export function* getTotalPrice() {
  yield takeEvery(storeTotalPrice, getSelectedItem );
 
}
export function* deleteItem() {
  yield takeEvery(deleteSelectedItem,deleteItemSelected);
}


