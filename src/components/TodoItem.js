'use strict';

var React = require('react/addons');

require('styles/TodoItem.scss');

var TodoItem = React.createClass({

	onDelete: function() {
		this.props.onDelete(this.props.item.id);
	},

    render: function() {
        return (
            <li className="TodoItem">
                {this.props.item.title}
                <a className="delete" href="#" onClick={this.onDelete}>x</a>
            </li>
        );
    }
});

module.exports = TodoItem;
