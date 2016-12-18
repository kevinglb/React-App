import React from 'react';
import ReactDOM from 'react-dom';
import {IndexLink, Link} from 'react-router';

export default class Topic extends React.Component{

	constructor(){
		super();
	}

	render(){
		return(
			<div className="topic-wrap">
				<ul className="topic-nav">
            		<li>
              			<Link to="topic/hot" activeClassName="active">
              				<span>Hot Topic</span>
              			</Link>
		        	</li>
		        	<li>
              			<Link to="topic/new" activeClassName="active">
              				<span>New Topic</span>
              			</Link>
		        	</li>
        		</ul>
        		<div className="topicList">
        			{this.props.children}
        		</div>
			</div>
		);
	}
}