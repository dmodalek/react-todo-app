'use strict';

var React = require('react/addons');
var TodoItem = require('./TodoItem');

require('styles/TodoList.scss');

var TodoList = React.createClass({

  render: function () {

    var createItem = function(item) {
        return (
            <TodoItem key={item.id} item={item} onDelete={this.props.onDelete} />
        );
    };

    return (
        <div className="TodoList">
            <ul>
                {this.props.items.map(createItem, this)}
            </ul>
        </div>
    );
  }
});

module.exports = TodoList;
