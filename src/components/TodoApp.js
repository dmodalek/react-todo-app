'use strict';

var React = require('react/addons');
var TodoInput = require('./TodoInput');
var TodoList = require('./TodoList');
var Utils = require('../Utils');

require('../styles/Main.scss');

// var imageURL = require('../images/yeoman.png');

var KEY = 'react-todo-app';

var TodoApp = React.createClass({

    getInitialState: function() {

		// Get items from Local Storage
		var items = Utils.store(KEY);

        return {
            items: items
        };
    },

    _onSave: function(item) {
		var newItems = this.state.items.concat([item]);
		Utils.store(KEY, newItems);
        this.setState({items: newItems});
    },

    _onDelete: function(id) {

		var newItems = this.state.items.filter(function (candidate) {
			return candidate.id !== id;
		});

		Utils.store(KEY, newItems);
		this.setState({items: newItems});
    },

    render: function() {
        return (
            <div className="TodoApp">
                <TodoInput onSave={this._onSave} />
                <TodoList items={this.state.items} onDelete={this._onDelete} />
            </div>
        );
    }
});

module.exports = TodoApp;
