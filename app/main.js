import React from 'react';
import ReactDOM,{render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory,hashHistory} from 'react-router'; // Browser history 是由 React Router 创建浏览器应用推荐的 history
import { syncHistoryWithStore } from 'react-router-redux'; // 利用react-router-redux提供的syncHistoryWithStore我们可以结合store同步导航事件


import { Provider } from 'react-redux';
import store from '../store/store';
import router from '../router';
import DevTool from '../container/DevTool';


// const store = finalCreateStore(reducer);
const app = document.getElementById('app');
// 给增强后的store传入reducer

// 创建一个增强版的history来结合store同步导航事件
// const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Router history={hashHistory} routes={router} />
			<DevTool />
		</div>
	</Provider>,
app);
