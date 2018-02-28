import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return(
			<Grid>
				<section id="header">
					<Row>
						<Col xs={12} md={12}>
							<div className="navigation">
								<nav className="navbar navbar-inverse">
								    <div className="navbar-header">
								    	<p className="navbar-brand">Forecast</p>
								    <ul className="nav navbar-nav">
								      <li><Link className="menu-link" to="/">Home</Link></li>
								      <li><Link className="menu-link" to="/weather">Weather</Link></li>
								    </ul>
								  </div>
								</nav>
							</div>
						</Col>
					</Row>
				</section>
			</Grid>
		);
	}
}

export default Header;