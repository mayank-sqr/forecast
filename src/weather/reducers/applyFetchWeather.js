import {
	FETCH_CITYWEATHER_REQUEST,
	FETCH_CITYWEATHER_SUCCESS,
	FETCH_CITYWEATHER_FAILURE
} from '../actions/actionTypes'

let initialState = {
	weather: [],
	isLoading: false
}

function applyFetchWeather(state = initialState, action) {

	switch(action.type) {

		case FETCH_CITYWEATHER_REQUEST:
			return Object.assign({}, state, {
				isLoading: true
			})
		case FETCH_CITYWEATHER_FAILURE:
			return Object.assign({}, state, {
				isLoading: false
			})
		case FETCH_CITYWEATHER_SUCCESS:
			return Object.assign({}, state, {
				weather: action.response,
				isLoading:false
			})
			default:
				return state;
	}

}

export default applyFetchWeather;