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
								<h5>To Run this application on your machine you need to install one addon depend on your browser. If you are using chrome <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en" target="_blank">Allow-Control-Allow-Origin</a> and If you are using firefox than use <a href="https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/" target="_blank">CORS Everywhere </a> and Enable it. This is because API does not support CORS Request and it throws preflight error.</h5>
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