import { combineReducers } from 'redux';
import  { TeamReducer } from './teamReducer';
import { ItemsReducer } from './itemsReducer';
import { selectedItem } from './selectedItemReducer';
const rootReducer = combineReducers({
  teamState: TeamReducer,
  itemsState:ItemsReducer,
  selectedItem: selectedItem
});

export default rootReducer;