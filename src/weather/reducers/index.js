import { combineReducers } from 'redux';
import applyFetchWeather from './applyFetchWeather';
import applyGetInitialForecast from './applyGetInitialForecast';

const weatherReducer = combineReducers({
	applyFetchWeather,
	applyGetInitialForecast
});

export default weatherReducer;