import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	doGetInitialForecast
} from '../actions/doGetInitialForecast';

import GridLayout from '../components/GridLayout'

class InitialLayout extends Component {

	componentDidMount() {
		this.props.fetchDefaultWeather(this.props.q)
	}

	render() {
		return(
			<div className="default-state">
				<GridLayout {...this.props}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		getInitial: state.weatherReducer.applyGetInitialForecast.defaultClimate
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchDefaultWeather: (q) => {
			dispatch(doGetInitialForecast(q))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InitialLayout);