import { createReducer } from 'redux-act';
import { storeItems } from './../actions/index';
 
export const ItemsReducer = createReducer({

    [storeItems]: (state, payload) => payload,
  }, []);

  