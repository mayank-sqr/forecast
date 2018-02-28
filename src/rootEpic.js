import { combineEpics } from 'redux-observable';

import weatherEpic from './weather/epics'

const rootEpic = combineEpics(
	weatherEpic	
);

export default rootEpic