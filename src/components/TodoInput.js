'use strict';

var React = require('react/addons');

require('styles/TodoInput.scss');

var TodoInput = React.createClass({

    propTypes: {
        onSave: React.PropTypes.func.isRequired
    },

    getInitialState: function() {
        return {
            value: ''
        };
    },

    onKeyUp: function(evt) {
        if(evt.keyCode === 13) {
            this.props.onSave(this.refs.input.getDOMNode().value);
            React.findDOMNode(this.refs.input).value = '';
            React.findDOMNode(this.refs.input).focus();
        }
    },

    render: function () {
        return (
            <div className="TodoInput">
                <input placeholder="Write a Todo" type="text" defaultValue="" ref="input" onKeyUp={this.onKeyUp} />
            </div>
        );
    }
});

module.exports = TodoInput;
