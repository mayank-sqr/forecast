import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import 'rxjs';
import store, { history } from './store';
import NProgress from 'nprogress'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import './common/common.css';

// components
import Header from './common/components/header'

// routes
import routes from './routes';


// NProgress
NProgress.configure({
  showSpinner: true,
  minimum: 0.1
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
