var Dispatcher = require('flux').Dispatcher;
var ListStore = require('../stores/ListStore');

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'ADD_NEW_TODO':
      ListStore.addNewItemHandler(action.title, action.time, action.detail);
      ListStore.emitChange();
      break;
    default:
      // no op
  }
})
module.exports = new Dispatcher();