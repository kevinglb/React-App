import React from 'react';

import Header from './header';
import Footer from './footer';


import {Link} from	'react-router'
export default class Layout extends React.Component{
	// constructor(){
	// 	super();
	// }
	
	render(){
		return(
			<div>
				<h1>This is the TItle</h1>
				{this.props.children}
				<Link to="archives"><button class="btn">Archives</button></Link>
				<Link to="settings"><button class="btn">Settings</button></Link>
			</div>
		);
	}
}