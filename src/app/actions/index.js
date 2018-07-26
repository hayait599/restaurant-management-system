
import { createAction } from 'redux-act';

export const testAction = createAction('USED_FOR_TESTING');
export const addNumber = createAction('ADD_NUMBER');
export const getTeam = createAction('GET_TEAM');
export const storeTeam = createAction('STORE_TEAM');
export const getItems = createAction('GET_ITEMS');
export const storeItems = createAction('STORE_ITEMS');