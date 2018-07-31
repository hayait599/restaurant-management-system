import { createAction } from 'redux-act';

export const testAction = createAction('USED_FOR_TESTING');
export const addNumber = createAction('ADD_NUMBER');
export const getTeam = createAction('GET_TEAM');
export const storeTeam = createAction('STORE_TEAM');
export const getItems = createAction('GET_ITEMS');
export const storeItems = createAction('STORE_ITEMS');
export const storeSelectedItem = createAction('STORE_SELECTED_ITEM');
export const selectIte = createAction('SELECT');
export const storeTotalPrice = createAction("STORE_TOTAL_PRICE");
export const deleteSelectedItem = createAction("DELETE_SELECTED_ITEM");