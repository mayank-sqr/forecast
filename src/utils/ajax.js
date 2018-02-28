import { ajax } from 'rxjs/observable/dom/ajax';
import * as constant from '../constant'


// Below is ES6 way to define function
export const get = (url, headers) => {
	headers = Object.assign({}, headers)
	let URL = url

	if(!URL.startsWith('http')) {
		URL = constant.WEATHER_API + url;
	}
	return ajax.get(URL, headers);

}


export const post = (url, headers) => {
	headers = Object.assign({}, headers)
	let URL = url

	if(!URL.startsWith('http')) {
		URL = constant.WEATHER_API + url;
	}
	return ajax.post(URL, headers);
}