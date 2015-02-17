var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var DocumentTitle = require('react-document-title');
var Html = require('./components/Html.jsx');

module.exports = function(routes){
	return function(request, response, next){
		Router.run(routes, request.url, function(Handler, state){
			var markup = React.renderToString(<Handler/>);

			var title = DocumentTitle.rewind();


			// TODO inject stores data.
			var html = React.renderToStaticMarkup(<Html title={title} markup={markup} />);

			const isNotFound = _.find(state.routes, { 'name': 'not-found' });

			response.status(!isNotFound ? 200 : 404).send('<!DOCTYPE html>' + html);
		});
	}
}