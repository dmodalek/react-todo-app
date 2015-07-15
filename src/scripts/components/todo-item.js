'use strict';

var React = require('react/addons');

require('../../styles/todo-item.scss');

var TodoItem = React.createClass({

	onDelete: function() {
		this.props.onDelete(this.props.item.id);
	},

	onClick: function() {

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
