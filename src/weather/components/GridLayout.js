import React, { Component } from 'react';
// import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'lodash';

class GridLayout extends Component {
	constructor(props) {
		super(props)
	}
	render() {

		const forecasts = this.props.weather;

		// const newObj = Object.assign({}, forecasts);

		console.log('@forecasts =>', forecasts)

/*		const listItem = forecasts.forecast.forecastday.map((forecast, i) => {
			
			return(
				<div className="sda">
					<p>{forecast.date}</p>
				</div>
			)

		});*/


		return(
			<div className="fetch-weather">
				<p>Weather Component</p>
			</div>
		)
	}
}

export default GridLayout;