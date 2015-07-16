'use strict';

var React = require('react/addons');

var TodoItem = require('./todo-item');
var TodoInput = require('./todo-input');

var AppActions = require('../actions/app-actions');
var AppStore = require('../stores/app-store');
var StoreMixin = require('../mixins/store-mixin');

require('../../styles/todo-list.scss');

// Private Functions

function _getItems() {
	return {
		items: AppStore.getItems()
	};
};

function _getTotalItems() {
	return AppStore.getTotalItems();
};

function _onSave(item) {
	AppActions.addItem(item);
};

function _onDelete(id) {
	console.log('id', id);
	AppActions.removeItem(id);
};

var TodoList = React.createClass({
	mixins: [StoreMixin(_getItems)],

	render: function () {

		var createItem = function(item) {
			return (
				<TodoItem key={item.id} item={item} onDelete={_onDelete} />
				);
		};

		return (
			<div className="TodoList">
			<TodoInput onSave={_onSave} />
			<ul>
			{this.state.items.map(createItem, this)}
			</ul>
			<p>Total Items: {_getTotalItems().qty}</p>
			</div>
			);
	}
});

module.exports = TodoList;
