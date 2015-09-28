import React from 'react'
import {RoutingContext, match} from 'react-router'
import Mustache from 'mustache'
import fs from 'fs'
import _ from 'lodash'
import createLocation from 'history/lib/createLocation'

var base_html = fs.readFileSync('server/templates/base.html').toString();

module.exports = function(routes){
    return function(request, response, next){
		let location = createLocation(request.url)

		// Server side react router https://github.com/rackt/react-router/blob/master/docs/guides/advanced/ServerRendering.md
		match({routes, location}, (error, redirectLocation, renderProps) => {
			if (redirectLocation)
				response.redirect(301, redirectLocation.pathname + redirectLocation.search)
			else if (error)
				response.status(500).send(error.message)
			else if (renderProps == null)
				response.status(404).send('Not found')
			else{
				console.log(renderProps);
				response.status(200).send(Mustache.to_html(base_html, {'content': React.renderToString(<RoutingContext {...renderProps}/>), 'production': process.env.NODE_ENV == 'production'}))
			}
		})
    }
};
