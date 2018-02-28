import {
	FETCH_CITYWEATHER_REQUEST,
	FETCH_CITYWEATHER_SUCCESS
} from './actionTypes'


// these functions are called action creators

export function doFetchWeather(city) {
	return {
		type: FETCH_CITYWEATHER_REQUEST,
		city
	};
}

export function doFetchWeatherFulfilled(payload) {
	console.log('@payload inside action =>', payload)
	return {
		type: FETCH_CITYWEATHER_SUCCESS,
		response: payload.response
	};
}