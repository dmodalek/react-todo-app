'use strict';

var React = require('react/addons');

var TodoItem = require('./todo-item');
var TodoInput = require('./todo-input');

var AppActions = require('../actions/app-actions');
var AppStore = require('../stores/app-store');

require('../../styles/todo-list.scss');

var TodoList = React.createClass({

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

  render: function () {

    var createItem = function(item) {
        return (
            <TodoItem key={item.id} item={item} onDelete={this._onDelete} />
        );
    };

    return (
        <div className="TodoList">
			<TodoInput onSave={this._onSave} />
			<ul>
				{this.state.items.map(createItem, this)}
			</ul>
			<p>Total Items: {this._getTotalItems().qty}</p>
        </div>
    );
  }
});

module.exports = TodoList;
