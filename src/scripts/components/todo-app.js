'use strict';

var React = require('react');
var AppActions = require('../actions/app-actions');
var AppStore = require('../stores/app-store');

var AppHeader = require('./app-header');
var TodoInput = require('./todo-input');
var TodoList = require('./todo-list');

require('../../styles/todo-app.scss');

var App = React.createClass({

	_getItems: function() {
		return {
			items: AppStore.getItems()
		};
	},

	_getTotalItems: function() {
		return AppStore.getTotalItems();
	},

	_onSave: function(item) {
		AppActions.addItem(item);
	},

	_onDelete: function(id) {
		console.log('id', id);
		AppActions.removeItem(id);
	},

	_onChange: function() {
		this.setState(this._getItems());
	},

	getInitialState: function() {
		return this._getItems();
	},

	componentWillMount: function() {
		AppStore.addChangeListener(this._onChange);
	},

	render: function() {

		return (
			<div className="TodoApp">
				<AppHeader />
				<TodoInput onSave={this._onSave} />
				<TodoList items={this.state.items} onDelete={this._onDelete} />
				<p>Total Items: {this._getTotalItems().qty}</p>
			</div>
		);
	}
});

module.exports = App;
