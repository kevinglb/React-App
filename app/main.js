import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import { Provider } from 'react-redux';

import Layout from '../component/layout';
import Home from '../component/Home';
import Course from '../component/course';
import Topic from '../component/topic';
import Note from '../component/note';
import Search from '../component/search';
import HotTopic from '../component/hotTopic';
import NewTopic from '../component/newTopic';
import Add from '../component/add';

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="course" component={Course}></Route>
			<Route path="topic" component={Topic}>
				<IndexRoute component={HotTopic}></IndexRoute>
				<Route path="hot" component={HotTopic}></Route>
				<Route path="new" component={NewTopic}></Route>
			</Route>
			<Route path="note" component={Note}></Route>
			<Route path="search" component={Search}></Route>
			<Route path="add" component={Add}></Route>
		</Route>
	</Router>,
 app);

