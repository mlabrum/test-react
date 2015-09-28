import React from 'react'
import Jumbotron from './Jumbotron.jsx'

export default class Inbox extends React.Component{
	render() {
		return (
			<div>
				<Jumbotron title='Welcome to the Inbox'/>
				<div>Inbox Screen</div>
			</div>
		);
	}
}
