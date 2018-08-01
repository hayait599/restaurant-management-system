import { createReducer } from 'redux-act';
import { orderStore } from './../actions/index';
 
export const orderReducer = createReducer({

    [orderStore]: (state, payload) => payload ,
    }, []);

  