var React = require('react');
var Router = require('react-router');

var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var DocumentTitle = require('react-document-title');

// Load Jquery and bootstrap libraries
if(typeof(document) !== 'undefined'){
	window.$ = require('jquery');
	require('bootstrap/dist/js/bootstrap.js');
}

var App = React.createClass({
	render: function(){
		return (
			<DocumentTitle title='Home'>
				<div>
					<header>
						<nav className='navbar navbar-default'>
							<div className="container">
								<div className='navbar-header'>
									<Link to="app" className='navbar-brand'>Testy</Link>
								</div>
								<ul className='nav navbar-nav'>
									<li><Link to="app">Home</Link></li>
									<li><Link to="inbox">Inbox</Link></li>
								</ul>
							</div>
						</nav>
					</header>
					<RouteHandler/>
				</div>
			</DocumentTitle>
		)
	}
});

module.exports = App;