import { combineReducers } from 'redux';
import applyFetchWeather from './applyFetchWeather';

const weatherReducer = combineReducers({
	applyFetchWeather
});

export default weatherReducer;