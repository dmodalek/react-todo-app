'use strict';

var React = require('react/addons');
var Router = require('react-router');
var AppStore = require('../stores/app-store');

var Link = Router.Link;

// require('../styles/todo-item-detail.scss');

// Private Functions

var TodoDetail = React.createClass({

	getInitialState: function() {
		return { 'item': '' };
	},

	componentDidMount: function () {
		var id = this.props.params.id;
		var item = AppStore.getItem(id);

		this.setState({ item: item });
	},

    render: function() {
        return (
			<div>
				<h1>Detail View</h1>
				<p>Name: {this.state.item.title}</p>
				<Link to="/">Back to the List</Link>
			</div>
        );
    }
});

module.exports = TodoDetail;
