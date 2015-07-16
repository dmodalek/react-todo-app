'use strict';

var React = require('react');


var Router = require('react-router');
var Link = Router.Link;

require('../../styles/todo-item-detail.scss');

var TodoDetail = React.createClass({

    render: function() {
        return (
			<div>
				<h1>Detail View</h1>
				<Link to="/">Back to the List</Link>
			</div>
        );
    }
});

module.exports = TodoDetail;
