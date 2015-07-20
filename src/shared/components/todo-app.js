'use strict';

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

// require('../styles/todo-app.scss');

var TodoApp = React.createClass({

	render: function() {

		return (
			<div className="TodoApp">
				<h1>Todo App</h1>
				<RouteHandler />
			</div>
		);
	}
});

module.exports = TodoApp;
