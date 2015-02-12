'use strict';
var React = require('react');

var Html = React.createClass({
	render: function () {
		return (
			<html>
				<head>
					<title>{ this.props.title }</title>
					<link rel="icon" href="/favicon.ico" />
					<link rel="stylesheet" href="/build/main.css" />
					<script src="/build/lib.js"></script>
					<script src="/build/main.js"></script>
				</head>
				<body dangerouslySetInnerHTML={{__html: this.props.markup}}></body>
			</html>
		);
	}
});

module.exports = Html;