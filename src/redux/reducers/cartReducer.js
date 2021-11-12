
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, INCREMENT_ITEM, DECREMENT_ITEM} from '../actions/types'

const initialState = JSON.parse(localStorage.getItem('cart')) || {
	items:[]
}


const reducerFunction = (state = initialState, action) => {
	switch(action.type){
		case GET_ITEMS:{
			return {
				...state
			}
		}
		case DELETE_ITEM:{
			let newState = {
				...state,
				items:state.items.filter(item => item.id !== action.payload)
			}
			localStorage.setItem('cart', JSON.stringify(newState))
			return newState
		}
		case DECREMENT_ITEM:{
			let newState = {
				...state,
				items:state.items.filter(item => {
					if(item.id === action.payload){
						return item.quantity--
					}
					return item
				})
			}
			localStorage.setItem('cart', JSON.stringify(newState))
			return newState
		}
		case INCREMENT_ITEM:{
			let newState = {
				...state,
				items:state.items.filter(item => {
					if(item.id === action.payload){
						return item.quantity++
					}
					return item
				})
			}
			localStorage.setItem('cart', JSON.stringify(newState))
			return newState
		}
		case ADD_ITEM:{
			let newState = {
					...state,
					items:[
						...state.items,
						action.payload
					]
				} 
			localStorage.setItem('cart', JSON.stringify(newState))
			return newState
		}
		default:
			return state
	}
}

export default reducerFunction