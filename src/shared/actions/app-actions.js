var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatcher/app-dispatcher');

var AppActions = {

	addItem: function(item) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.ADD_ITEM,
			item: item
		});
	},
	removeItem: function(index) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_ITEM,
			index: index
		});
	}
};

module.exports = AppActions;
