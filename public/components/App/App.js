import React from 'react';
import { render } from 'react-dom';
import Header from '../Header';
import Footer from '../Footer';
import About from '../About';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
export default class App extends React.Component {
	render() {
		return (
			<div>
			<Header/>
			<h2>Home</h2>
			 {this.props.children}
			<Footer/>
			</div>
		);
	}
}
