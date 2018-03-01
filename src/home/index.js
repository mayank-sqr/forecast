import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './home.css'


class Home extends Component {
	render() {
		return(
			<Grid>
				<section id="home">
					<Row>
						<Col xs={12} md={12}>
							<div className="featured-img"></div>
							<div className="weather-info">
								<h1>Welcome to Forecast Conditions</h1>
								<p>Forecast is the day-to-day or hour-to-hour change in the atmosphere. Here we are providing 5 days forecast depending on your city.</p>
								<p>You can search your city on provided searchbar on Weather nav to get next 5 days forecast conditions and set your plan accordingly.</p>
								<p className="highlight">Happy Coding.... cheers!!!</p>
							</div>
						</Col>
					</Row>
				</section>
			</Grid>
		)
	}
}

export default Home;