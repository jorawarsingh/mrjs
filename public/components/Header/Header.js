import React from 'react';
import {Link} from 'react-router';
export default class Header extends React.Component {
	render() {
		return (
			<div>
			  <ul role="nav">
			  	<li><Link to="/">Home</Link></li>
		        <li><Link to="/about">About</Link></li>
		        </ul>
			</div>
		);
	}
}
