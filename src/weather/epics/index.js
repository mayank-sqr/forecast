import { combineEpics} from 'redux-observable';

import epicFetchWeather from './epicFetchWeather'


const weatherEpic = combineEpics(
	epicFetchWeather	
);

export default weatherEpic