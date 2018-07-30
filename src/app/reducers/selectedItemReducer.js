import { createReducer } from 'redux-act';
import { storeSelectedItem } from './../actions/index';
 
export const selectedItem = createReducer({

    [storeSelectedItem]: (state, payload) => payload,
  }, []);

  