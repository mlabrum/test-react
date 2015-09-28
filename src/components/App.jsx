import React from 'react';
import {Link, IndexLink, RouteHandler} from 'react-router';

export default class App extends React.Component{
	render(){
		return (<div>
			<header>
				<nav className='navbar navbar-default'>
					<div className="container">
						<div className='navbar-header'>
							<IndexLink to="/" className='navbar-brand'>Testy</IndexLink>
						</div>
						<ul className='nav navbar-nav'>
							<li><IndexLink to="/">Home</IndexLink></li>
							<li><Link to="/inbox">Inbox</Link></li>
						</ul>
					</div>
				</nav>
			</header>
			<RouteHandler/>
		</div>)
	}
}
