import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './container/App';
import Home from './container/Home';
import Search from './container/Search';
import AddContainer from './container/AddContainer';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home}></IndexRoute>
		<Route path="search" component={Search}></Route>
		<Route path="add" component={AddContainer}></Route>
	</Route>
);