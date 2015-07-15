'use strict';

var React = require('react');
var Router = require('react-router');
var TodoApp = require('./components/todo-app');
var Route = Router.Route;

var Routes = (
  <Route handler={TodoApp}>
    <Route name="/" handler={TodoApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
