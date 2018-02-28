import { combineReducers } from 'redux';
import weatherReducer from './weather/reducers';

const rootReducer = combineReducers({
	weatherReducer
})

export default rootReducer;