import React from "react/addons";
import TodoItem from "./todo-item";

import TodoInput from "./todo-input";

import AppActions from "../actions/app-actions";
import AppStore from "../stores/app-store";
import StoreMixin from "../mixins/store-mixin";

require('../../assets/styles/todo-list.scss');

// Private Functions

function _getItems() {
	return {
		items: AppStore.getItems()
	};
}

function _getTotalItems() {
	return AppStore.getTotalItems();
}

function _onSave(item) {
	AppActions.addItem(item);
}

function _onDelete(id) {
	AppActions.removeItem(id);
}

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
