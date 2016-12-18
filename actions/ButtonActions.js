import AppDispatcher from '../dispatcher/AppDispatcher';

var ButtonActions = {
	addNewToDo: function(title,time,detail){
		AppDispatcher.dispatch({
      		actionType: 'ADD_NEW_TODO',
      		title: title,
      		time: time,
      		detail: detail
    	});
	}
}