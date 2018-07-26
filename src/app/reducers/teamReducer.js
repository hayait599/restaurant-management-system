import { createReducer } from 'redux-act';
import { storeTeam } from './../actions/index';
 
export const TeamReducer = createReducer({

    [storeTeam]: (state, payload) => payload,
  }, []);