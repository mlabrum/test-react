'use strict';
import React from 'react';
import Jumbotron from './Jumbotron.jsx';

export default class Home extends React.Component{
	render () {
		return (
			<div>
				<Jumbotron title='Welcome to the home page'/>
				<div>Home Screen</div>
			</div>
		);
	}
}
