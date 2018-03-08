import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import ReactImageFallback from "react-image-fallback";

class ListLayout extends Component {

	render() {

		const climate = this.props.weather;

		if(_.isEmpty(climate)) {
			return null
		}

	  let fiveDayForecast =  climate.forecast.forecastday;
		 	
		const listItem = fiveDayForecast.map((detailForecast, i) => {
			
			return(
		    <tr key={detailForecast.date_epoch}>
		      <th className="date">{detailForecast.date}</th>
		      <td className="climate-icon">
		      	<ReactImageFallback
		      	  src={detailForecast.day.condition.icon}
		      	  fallbackImage="http://i.imgur.com/rUeYYr3.jpg"
		      	  initialImage="http://i.imgur.com/fTPshtp.gif"
		      	  alt="symbolic-representation"
		      	  className="img-responsive climate-fig"
		      	/>
		      </td>
		      <td className="climatic-text">{detailForecast.day.condition.text}</td>
		      <td className="avg-temp">{detailForecast.day.avgtemp_c}</td>
		    </tr>
			)

		});


		return(
			<div className="detail-regional-forecast">
				<Row>
					<Col xs={12} md={12}>
						<div className="city-name">
							<p>{climate.location.name}</p>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={12}>
						<div className="table-wrapper">
							<table className="table table-striped table-dark">
							  <thead>
							    <tr>
							      <th scope="col">Date</th>
							      <th scope="col">Icon</th>
							      <th scope="col">Climatic Condition</th>
							      <th scope="col">Avg. Temp in Celcius</th>
							    </tr>
							  </thead>
							  <tbody>
									{listItem}
							  </tbody>
							</table>
						</div>
					</Col>
				</Row>
			</div>
		)
	}
}

export default ListLayout;