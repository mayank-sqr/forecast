import React from 'react';
import { Route, Switch } from 'react-router'

//components
import Home from './home';
import Weather from './weather';


export default(
	<Switch>
		
		<Route exact path="/" component ={Home}/>
		
		<Route exact path="/weather" component ={Weather}/>

	</Switch>
);