var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

/* Components */
var App = require('./components/App.jsx');
var NotFound = require('./components/NotFound.jsx');
var Home = require('./components/Home.jsx');
var Inbox = require('./components/Inbox.jsx');

module.exports = (
	<Route name="app" path="/" handler={App}>
		<Route handler={Inbox} name="inbox">

		</Route>
		<DefaultRoute handler={Home} />
		<NotFoundRoute handler={NotFound} name='not-found'/>
	</Route>
);