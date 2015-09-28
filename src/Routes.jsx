import React from 'react';
import {Route, IndexRoute} from 'react-router';


/* Components */

import App from './components/App.jsx'
import NotFound from './components/NotFound.jsx'
import Home from './components/Home.jsx'
import Inbox from './components/Inbox.jsx'

module.exports = (
	<Route path="/" component={App}>
		<Route component={Inbox}></Route>
		<IndexRoute component={Home} />
		<Route path="*" component={NotFound}/>
	</Route>
);
