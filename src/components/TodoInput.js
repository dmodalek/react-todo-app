'use strict';

var React = require('react/addons');
var Utils = require('../Utils');

require('styles/TodoInput.scss');

var TodoInput = React.createClass({

    propTypes: {
        onSave: React.PropTypes.func.isRequired
    },

    onKeyUp: function(evt) {
        if(evt.keyCode === 13) {

			var newItem = {
				id: Utils.uuid(),
				title: this.refs.input.getDOMNode().value,
				completed: false
			};

            this.props.onSave(newItem);

            // Clean up
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
