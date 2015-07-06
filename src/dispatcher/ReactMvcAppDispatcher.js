var Dispatcher = require('flux').Dispatcher;

/**
  * A bridge function between the views and the dispatcher, marking the action
  * as a view action.  Another variant here could be handleServerAction.
  * @param  {object} action The data coming from the view.
  */
 Dispatcher.handleViewAction: function(action) {
   this.dispatch({
     source: 'VIEW_ACTION',
     action: action
   });
 }

module.exports = new Dispatcher();
