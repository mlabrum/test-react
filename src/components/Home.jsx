'use strict';
var React = require('react');
var DocumentTitle = require('react-document-title');
var Jumbotron = require('./Jumbotron.jsx');

var Home = React.createClass({
	render: function () {
		return (
			<DocumentTitle title='Home'>
				<div>
					<Jumbotron title='Welcome to the home page'/>
					<div>Home Screen</div>
				</div>
			</DocumentTitle>
		);
	}
});
module.exports = Home;