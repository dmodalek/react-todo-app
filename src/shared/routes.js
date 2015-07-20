import React from "react";
import Router from "react-router";

import TodoApp from './components/todo-app';
import TodoList from './components/todo-list';
import TodoDetail from './components/todo-detail';

let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;

export default (
	<Route name="app" path="/" handler={TodoApp}>
		<Route name="detail" path="/detail/:id" handler={TodoDetail} />
		<DefaultRoute name="list" handler={TodoList} />
	</Route>
);
