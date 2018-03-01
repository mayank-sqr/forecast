import React, { Component } from 'react';
import KeywordTerm from './containers/search'
import GridLayout from './components/GridLayout'
import './forecast.css'


class Weather extends Component {
	render() {
		console.log('@main index =>', this.props)

		return(
			<div id="forecast" className="container">
				<KeywordTerm />
				<GridLayout {...this.props} />
			</div>
		)

	}
}

export default Weather;