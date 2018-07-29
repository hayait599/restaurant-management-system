import { combineReducers } from 'redux';
import  { TeamReducer } from './teamReducer';
import { ItemsReducer } from './itemsReducer';
const rootReducer = combineReducers({
  teamState: TeamReducer,
  itemsState:ItemsReducer
});

export default rootReducer;