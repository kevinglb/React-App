import {store} from './store/store';

export const thunk = store => next => action =>{
	if(action.fn && typeof action.fn === 'function'){
		action.fn(store.dispatch, store.getState()); //invoce the action
	}else{
		return next(action); //dispatch normally
	}
};

export const logger = store => next => action => {
	console.log('MIDDLEWARE: excuting action '+ action.type);
	return next(action);
};