import { combineEpics} from 'redux-observable';

import epicFetchWeather from './epicFetchWeather'
import epicGetinitialForecast from './epicGetinitialForecast'


const weatherEpic = combineEpics(
	epicFetchWeather,
	epicGetinitialForecast
);

export default weatherEpic