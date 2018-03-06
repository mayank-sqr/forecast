import {
	WEATHER_REQUEST_START,
	WEATHER_REQUEST_SUCCESS,
	WEATHER_REQUEST_FAILURE
} from './actionTypes'

export function doGetInitialForecast(atts) {
	return {
		type: WEATHER_REQUEST_START,
		atts
	}
}

export function doFailuerInitialForecast() {
	return {
		type: WEATHER_REQUEST_FAILURE
	}
}

export function doInitialForecastFullfiled(payload) {
	return {
		type: WEATHER_REQUEST_SUCCESS,
		response: payload.response
	}
}