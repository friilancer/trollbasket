import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, INCREMENT_ITEM, DECREMENT_ITEM, CLEAR_ITEMS} from './types'


export const getItems = () => {
	return {
		type: GET_ITEMS
	}
}

export const clearItems = () => {
	return {
		type: CLEAR_ITEMS
	}
}


export const deleteItem = (id) => {
	return {
		type: DELETE_ITEM,
		payload: id
	}
}

export const decrementItem = (id) => {
	return {
		type: DECREMENT_ITEM,
		payload: id
	}
}

export const incrementItem = (id) => {
	return {
		type: INCREMENT_ITEM,
		payload: id
	}
}

export const addItem = (item) => {
	return {
		type: ADD_ITEM,
		payload: item
	}
}