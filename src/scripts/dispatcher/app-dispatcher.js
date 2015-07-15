var Dispatcher = require('flux').Dispatcher;
var assign = require('react/lib/Object.assign');

/**
* A bridge function between the views and the dispatcher, marking the action
* as a view action.  Another variant here could be handleServerAction.
* @param  {object} action The data coming from the view.
*/

var AppDispatcher = assign(new Dispatcher(), {

	handleViewAction: function(action) {

		console.log('action', action);

		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		});
	}
});

module.exports = AppDispatcher;
