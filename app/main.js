import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


import Layout from '../component/layout';
import Header from '../component/Header';
import Archives from '../component/Archives';
import Featured from '../component/Featured';
import Settings from '../component/Settings';
import Footer from '../component/Footer';

const app = document.getElementById('app');
const header = document.getElementById('header');
const footer = document.getElementById('footer')

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Header}>
			<Route path="featured"></Route>
			<Route path="archives"></Route>
			<Route path="settings"></Route>
		</Route>
	</Router>,header);

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<Route path="featured" component={Featured}></Route>
			<Route path="archives" component={Archives}></Route>
			<Route path="settings" component={Settings}></Route>
		</Route>
	</Router>,
 app);

ReactDOM.render(<Footer/>,footer);