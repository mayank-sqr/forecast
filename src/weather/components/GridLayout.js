import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import ReactImageFallback from "react-image-fallback";

class GridLayout extends Component {
	render() {
		const initialCity = this.props.getInitial

		console.log('@initialCity =>', initialCity)

		return (
			<div className="grid-box">
				<p>Initial Page load.</p>
			</div>
		)
	}
}

export default GridLayout;