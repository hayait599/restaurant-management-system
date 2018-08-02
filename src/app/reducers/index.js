import { combineReducers } from 'redux';
//Reducers
import  { TeamReducer } from './teamReducer';
import { ItemsReducer } from './itemsReducer';
import { selectedItem } from './selectedItemReducer';
import { totalPriceReducer } from './totalPriceReducer';
import { deleteSelected } from './deleteSelectedItemReducer';
import { orderReducer } from './orderReducer';

const rootReducer = combineReducers({
  teamState: TeamReducer,
  itemsState:ItemsReducer,
  selectedItem: selectedItem,
  totalPrice: totalPriceReducer,
  deleteItem: deleteSelected,
  order: orderReducer,
  
});

export default rootReducer;