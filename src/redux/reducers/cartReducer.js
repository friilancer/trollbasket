import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types'

const initialState = JSON.parse(sessionStorage.getItem('cart')) || {
	items:[]
}


export default (state = initialState, action) => {
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
			sessionStorage.setItem('cart', JSON.stringify(newState))
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
			sessionStorage.setItem('cart', JSON.stringify(newState))
			return newState
		}
		default:
			return state
	}
}