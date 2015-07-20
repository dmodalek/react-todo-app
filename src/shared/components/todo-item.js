'use strict';

var React = require('react/addons');
var Navigation = require('react-router').Navigation;

// require('../styles/todo-item.scss');

var TodoItem = React.createClass({
	mixins: [Navigation],

	onDelete: function() {
		this.props.onDelete(this.props.item.id);
	},

	onClick: function() {
		this.transitionTo('/detail/' + this.props.item.id);
	},

    render: function() {
        return (
            <li className="TodoItem" onClick={this.onClick}>
                {this.props.item.title}
                <a className="delete" href="#" onClick={this.onDelete}>x</a>
            </li>
        );
    }
});

module.exports = TodoItem;
