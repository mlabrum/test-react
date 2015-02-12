'use strict';
var React = require('react');
var DocumentTitle = require('react-document-title');

var NotFound = React.createClass({
	render: function () {
		return (
			<DocumentTitle title='Not Found'>
				<div>Not Found</div>
			</DocumentTitle>
		);
	}
});
module.exports = NotFound;