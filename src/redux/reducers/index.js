import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import viewReducer from './viewReducer';

export default combineReducers({
	cart: cartReducer,
	views: viewReducer
})