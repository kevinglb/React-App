import React from 'react';

import {Link} from	'react-router'
export default class Layout extends React.Component{
	constructor(){
		super();
	}
	
	render(){
		return(
			<div>
				{this.props.children}
				<Link to="archives"><button className="btn">Archives</button></Link>
				<Link to="settings"><button className="btn">Settings</button></Link>
			</div>
		);
	}
}