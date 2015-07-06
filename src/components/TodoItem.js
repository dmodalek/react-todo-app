'use strict';

var React = require('react/addons');

require('styles/TodoItem.scss');

var TodoItem = React.createClass({

    render: function() {
        return (
            <li className="TodoItem">
                {this.props.item}
            </li>
        );
    }
});

module.exports = TodoItem;
