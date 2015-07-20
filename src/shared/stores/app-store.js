var AppDispatcher = require('../dispatcher/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var Utils = require('../utils');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';
var LOCAL_STORAGE_KEY = 'react-todo-app';
var _todos = Utils.store(LOCAL_STORAGE_KEY);

// Private Functions

function _addItem(item) {
	_todos.push(item);
	Utils.store(LOCAL_STORAGE_KEY, _todos);
}

function _removeItem(id) {
	_todos.forEach(function(item, index) {
		if(id === item.id) {
			_todos.splice(index, 1);
			Utils.store(LOCAL_STORAGE_KEY, _todos);
		}
	});
}

function _getItem(id) {
	var result = false;

	_todos.forEach(function(item) {
		if (id === item.id) {
			result = item;
		}
	});
	return result;
}

function _totalItems() {
	var qty = 0;

	_todos.forEach(function() {
		qty++;
	});

	return { 'qty': qty };
}

// AppStore Object

var AppStore = assign(EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	getItems: function() {
		return _todos;
	},

	getItem: function(id) {
		return _getItem(id);
	},

	getTotalItems: function() {
		return _totalItems();
	},

	dispatcherIndex: AppDispatcher.register(function(payload) {
		var action = payload.action;

		switch(action.actionType){
			case AppConstants.ADD_ITEM:
			_addItem(payload.action.item);
			break;

			case AppConstants.REMOVE_ITEM:
			_removeItem(payload.action.index);
			break;
		}

		AppStore.emitChange();

		return true;
	})

});

module.exports = AppStore;
