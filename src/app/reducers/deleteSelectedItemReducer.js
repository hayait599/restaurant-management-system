import { createReducer } from 'redux-act';
import { deleteSelectedItem, storeSelectedItem } from './../actions/index';
export const deleteSelected = createReducer({

    [deleteSelectedItem]: (state, payload) => payload ,
    [storeSelectedItem]: (state,payload) => payload
  }, null);

  