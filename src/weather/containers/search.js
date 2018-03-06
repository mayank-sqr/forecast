import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
	doFetchWeather
} from '../actions/doFetchWeather'

import GridLayout from '../components/GridLayout'


class KeywordTerm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(e) {
		this.setState({
			term: e.target.value
		});
	}

	onFormSubmit(e){
		e.preventDefault();

		// Fetching weather data from search-bar
		this.props.onSubmitClick(this.state.term);
		this.setState({ term: ''})
	}

	render() {
		/*let grids = <span />;
		
		if(this.props.weather) {
			grids = <GridLayout {...this.props} />
		}*/
		

		return (
			<div className="grid-box">
				<form onSubmit={this.onFormSubmit} autoComplete="off" className="input-group">
					<input 
					className="form-control search-box text-center"
					name="search"
					type="text"
					placeholder="Enter City Name"
					value={this.state.term}
					onChange={this.onInputChange}
					/>	
					<span className="input-group-btn">
						<button
						type="submit"
						className="btn btn-primary">
						Submit
						</button>
					</span>
				</form>	
				

				<GridLayout {...this.props} />

			</div>
		);

	}
}

const mapStateToProps = state => {
	return {
		weather: state.weatherReducer.applyFetchWeather.weather
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSubmitClick: (q) => {
			dispatch(doFetchWeather(q))
		}
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(KeywordTerm);