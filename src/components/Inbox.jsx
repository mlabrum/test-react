'use strict';
var React = require('react');
var DocumentTitle = require('react-document-title');
var Jumbotron = require('./Jumbotron.jsx');

var Inbox = React.createClass({
	render: function () {
		return (
			<DocumentTitle title='Inbox'>
				<div>
					<Jumbotron title='Welcome to the Inbox'/>
					<div>Inbox Screen</div>
				</div>
			</DocumentTitle>
		);
	}
});
module.exports = Inbox;