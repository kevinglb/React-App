import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './container/App';
import Home from './container/Home';
import UndoneList from './container/UndoneList';
import DoneList from './container/DoneList';
import ToDoList from './container/ToDoList';
import Book from './container/Book';
import AQI from './container/AQI';
<<<<<<< HEAD
=======
import CityAqi from './container/CityAqi';
>>>>>>> 4ced95e1ac822359ecad0c160a8e1e35c3ea1a67
import AddContainer from './container/AddContainer';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home}></IndexRoute>
		<Route path="todolist" component={ToDoList}></Route>
		<Route path="undonelist" component={UndoneList}></Route>
		<Route path="book" component={Book}></Route>
		<Route path="aqi" component={AQI}></Route>
		<Route path="aqi/:city" component={CityAqi}/>
		<Route path="add" component={AddContainer}></Route>
		<Route path="donelist" component={DoneList}></Route>
		<Route path="aqi" component={AQI}></Route>
	</Route>
);