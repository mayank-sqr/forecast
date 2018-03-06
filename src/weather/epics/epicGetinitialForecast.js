import * as ajax from '../../utils/ajax';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable'
import * as constant from '../../constant'
import queryString from 'query-string'

import {
	WEATHER_REQUEST_START,
	WEATHER_REQUEST_FAILURE
} from '../actions/actionTypes'

import {
	doInitialForecastFullfiled
} from '../actions/doGetInitialForecast'


export function epicGetInitialForecast(action$, store) {
	return action$
		.ofType(WEATHER_REQUEST_START)
		.map(function(action) {
			let defaultCity = {
				q: 'pune'
			}
			defaultCity = queryString.stringify(defaultCity, {
				arrayFormat: 'index'
			})

			// Deep Copying Concept
			return Object.assign({}, action, {
				defaultCity
			})

		}) 

		.mergeMap(action => 
			ajax.get(`/v1/search.json?${action.defaultCity}&key=${constant.API_KEY}`)
			.map(response => doInitialForecastFullfiled(response))
			.catch(error => Observable.of({
				type: WEATHER_REQUEST_FAILURE,
				payload: error.xhr.response,
				error: true
			}))
		);
}
export default epicGetInitialForecast;