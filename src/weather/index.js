import React, { Component } from 'react';
import KeywordTerm from './containers/search'
import './forecast.css'


class Weather extends Component {
	render() {
		return(
			<div id="forecast" className="container">
				<KeywordTerm />
			</div>
		)

	}
}

export default Weather;