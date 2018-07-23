import 'regenerator-runtime/runtime';
import { takeEvery } from 'redux-saga/effects';
import {
    testAction
} from './../actions/index';
 

 
function* testFunction() {
  try {
 
    
    yield console.log('error');

  } catch (error) {
    yield console.log(error);
  }
}

export function* testSaga() {
  yield takeEvery(testAction, testFunction);
}