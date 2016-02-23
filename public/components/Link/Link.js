import React from 'react';
import App from '../App';
import About from '../About';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
export default class Link extends React.Component {
	render() {
		return (
			<div>
			  <Router history={browserHistory}>
			    <Route path="/" component={App}>
			      <Route path="/about" component={About}/> 
			    </Route>
			  </Router>
			</div>
		);
	}
}
