
import 'regenerator-runtime/runtime';
import {
  takeEvery,
  put
} from 'redux-saga/effects';
import axios from '../services/axios';
import {
  getTeam,
  storeTeam
} from './../actions/index';

 

function* getTeamFunction() {
  try {
    const res = yield  axios.get('/team.json');
    const data = res.data;
    yield put (storeTeam(data))
    
  } catch (error) {
    yield console.log(error);
  }
}

export function* getSaga() {
  yield takeEvery(getTeam, getTeamFunction);
}