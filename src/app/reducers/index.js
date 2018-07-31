import { combineReducers } from 'redux';
import  { TeamReducer } from './teamReducer';
import { ItemsReducer } from './itemsReducer';
import { selectedItem } from './selectedItemReducer';
import { totalPriceReducer } from './totalPriceReducer';
import { deleteSelected } from './deleteSelectedItemReducer';
const rootReducer = combineReducers({
  teamState: TeamReducer,
  itemsState:ItemsReducer,
  selectedItem: selectedItem,
  totalPrice: totalPriceReducer,
  deleteItem: deleteSelected
});

export default rootReducer;