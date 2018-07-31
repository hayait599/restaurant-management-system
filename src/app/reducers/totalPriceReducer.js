import { createReducer } from 'redux-act';
import { storeTotalPrice } from './../actions/index';
 
export const totalPriceReducer = createReducer({

    [storeTotalPrice]: (state, payload) => payload,
  }, []);