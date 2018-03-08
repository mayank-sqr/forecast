import * as ajax from '../../utils/ajax';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable'
import * as constant from '../../constant'
import queryString from 'query-string'
import {
	FETCH_CITYWEATHER_REQUEST,
	FETCH_CITYWEATHER_FAILURE
} from '../actions/actionTypes'

import {
	doFetchWeatherFulfilled
} from '../actions/doFetchWeather'

// var NodeGeocoder = require('node-geocoder');


export default function epicFetchWeather(action$, store) {
	return action$.ofType(FETCH_CITYWEATHER_REQUEST)
	.map(function(action) {


		let newcity = {
			q: action.city ? action.city : 'pune',
			days: 5
		}
		newcity = queryString.stringify(newcity, {
			arrayFormat: 'index'
		})
		// Return new `action` object with new key `newcity` to call API also known as DeepCoying Concept
		return Object.assign({}, action, {
			newcity
		})

	})


		.mergeMap(action => 
			ajax.get(`/v1/forecast.json?${action.newcity}&key=${constant.API_KEY}`)
			.map(response => doFetchWeatherFulfilled(response))
			.catch(error => Observable.of({
				type: FETCH_CITYWEATHER_FAILURE,
				payload: error.xhr.response,
				error:true
			}))
		);
}