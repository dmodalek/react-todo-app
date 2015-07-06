'use strict';

var React = require('react/addons');
var TodoInput = require('./TodoInput');
var TodoList = require('./TodoList');

require('../styles/Main.scss');

// var imageURL = require('../images/yeoman.png');

var TodoApp = React.createClass({

    getInitialState: function() {
        return {
            items: []
        };
    },

    _onSave: function(text) {
        this.setState({items: this.state.items.concat([text])});
    },

    render: function() {
        return (
            <div className="TodoApp">
                <TodoInput onSave={this._onSave} />
                <TodoList items={this.state.items}/>
            </div>
        );
    }
});

module.exports = TodoApp;
