'use strict';

var React = require('react/addons');
var TodoItem = require('./TodoItem');

require('styles/TodoList.scss');

var TodoList = React.createClass({

  render: function () {

    var createItem = function(item) {
        return (
            <TodoItem item={item} />
        );
    };

    return (
        <div className="TodoList">
            <ul>
                {this.props.items.map(createItem)}
            </ul>
        </div>
    );
  }
});

module.exports = TodoList;
