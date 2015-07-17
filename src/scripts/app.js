'use strict';

var React = require('react');
var Router = require('react-router');

var TodoApp = require('./components/todo-app');
var TodoList = require('./components/todo-list');
var TodoDetail = require('./components/todo-detail');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;


var routes = (
	<Route name="app" path="/" handler={TodoApp}>
		<Route name="detail" path="/detail/:id" handler={TodoDetail} />
		<DefaultRoute name="list" handler={TodoList} />
	</Route>
	);

Router.run(routes, function (Root) {
	React.render(<Root/>, document.body);
});
