import {
	WEATHER_REQUEST_START,
	WEATHER_REQUEST_SUCCESS,
	WEATHER_REQUEST_FAILURE
} from '../actions/actionTypes'

let initialState = {
	weather: [],
	counts: {}, // Object of Arrays
	isLoading: false,
	errors: []
}

function applyGetInitialForecast(state = initialState, action) {
	switch(action.type) {
		
		case WEATHER_REQUEST_START:
			return Object.assign({}, state, {
				isLoading: true
			})

		case WEATHER_REQUEST_FAILURE:
			return Object.assign({}, state, {
				isLoading: false
			})

		case WEATHER_REQUEST_SUCCESS: 
			return Object.assign({}, state, {
				defaultClimate: action.response,
				isLoading: false
			})
		default:
			return state;
	}
}

export default applyGetInitialForecast;