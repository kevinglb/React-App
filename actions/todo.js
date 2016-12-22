import {ADD_TODO,DELETE_TODO,COMPLETE_TODO,UNDO_TODO} from './constants'; //引入action常量


// export const ADD_TODO = '';
// export const COMPLETE_TODO = 'COMPLETE_TODO';
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE',
// };

export function addToDo(number,title,time,detail) {
  return {
    type: ADD_TODO,
    number: number,
    title: title,
    time: time,
    detail: detail
  };
}

export function deleteToDo(number){
	return {
		type: DELETE_TODO,
		index: number
	};
}
export function completeToDo(number) {
  return {
    	type: COMPLETE_TODO,
    	index: number
  };
}

export function undoToDo(number){
	return {
		type: UNDO_TODO,
		index: number
	}
}
// export function setVisibilityFilter(filter) {
//   return {
//     type: "SET_VISIBILITY_FILTER",
//     filter:filter
//   };
// }