import {GET_VIEWS, ADD_VIEW} from '../actions/types'

const initialState = [];

const reducerFunction = (state = initialState, action) => {
	switch(action.type){
		case GET_VIEWS:{
			return [
				...state
            ]
		}
		case ADD_VIEW:{
            let id = action.payload
            let newState = [...state]
            const index = newState.indexOf(id);
            if (index > -1) {
                newState.splice(index, 1);
            }
            newState = [...newState, id]
            newState.length >3 && newState.splice(0,1)
		    return newState
		}
		default:
			return state
	}
}

export default reducerFunction