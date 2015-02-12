'use strict';
var React = require('react');
var Router = require('react-router');
var routes = require("./routes.jsx");

require('../less/main.less');

document.addEventListener("DOMContentLoaded", function(e){
	Router.run(routes, Router.HistoryLocation, function(Handler, state){
		React.render(<Handler/>, document.body);
	});
});