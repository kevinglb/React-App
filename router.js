import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './container/App';
import Home from './container/Home';
import UndoneList from './container/UndoneList';
import DoneList from './container/DoneList';
import ToDoList from './container/ToDoList';
import AddContainer from './container/AddContainer';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home}></IndexRoute>
		<Route path="todolist" component={ToDoList}></Route>
		<Route path="undonelist" component={UndoneList}></Route>
		<Route path="add" component={AddContainer}></Route>
		<Route path="donelist" component={DoneList}></Route>
	</Route>
);