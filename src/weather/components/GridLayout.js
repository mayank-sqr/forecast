import React, { Component } from 'react';
// import { Grid, Row, Col } from 'react-bootstrap';

class GridLayout extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const forecast = this.props

		console.log('@forecast inside GridLayout =>', forecast)

		return(
			<div className="fetch-weather">
				<p>Weather Component</p>
			</div>
		)
	}
}

export default GridLayout;