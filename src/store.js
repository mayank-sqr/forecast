import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import createHistory from 'history/createHashHistory'
// import the root reducer
import rootEpic from './rootEpic';
import rootReducer from './rootReducer';
import queryString from 'query-string'


export const history = createHistory({
	// basename: `/optportal/showcase/${SHOWCASE}.html`,
})


const epicMiddleware = createEpicMiddleware(rootEpic, {
	dependencies: {
		queryString
	}
});

const store = createStore(
	rootReducer,
	applyMiddleware(epicMiddleware)
);

export default store;