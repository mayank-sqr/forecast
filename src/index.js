import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import 'rxjs';
import store, { history } from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import './common/common.css';
import $ from "jquery";

// routes
import routes from './routes';

// components
import Header from './common/components/header'

$.ajax({
  url: 'http://ipinfo.io/geo' ,
  success: function (response) {
      if(response.city){
      	window.city = response.city

      }
  },
  async: false
});


ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div className="App">
				<Header />
			  <div className="wrap">
			    {routes}
			  </div>
			</div>
		</ConnectedRouter>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
