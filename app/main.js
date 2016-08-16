import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


import Layout from '../component/layout';
import Archives from '../component/Archives';
import Featured from '../component/Featured';
import Settings from '../component/Settings';


const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component="Featured"></IndexRoute>
			<Route path="archives" component={Archives}></Route>
			<Route path="settings" component={Settings}></Route>
		</Route>
	</Router>,
 app);