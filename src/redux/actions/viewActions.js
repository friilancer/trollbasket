import {GET_VIEWS, ADD_VIEW} from './types';

export const getViews = () => {
	return {
		type: GET_VIEWS
	}
}

export const addView = (id) => {
	return {
		type: ADD_VIEW,
		payload: id
	}
}