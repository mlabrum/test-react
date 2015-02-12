'use strict';
var React = require('react');

var Jumbotron = React.createClass({
	render: function () {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1>{this.props.title}</h1>
					{this.props.children}
				</div>
			</div>
		);
	}
});
module.exports = Jumbotron;