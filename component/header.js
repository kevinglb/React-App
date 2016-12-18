import React from 'react';

import {Link} from	'react-router'

export default class Header extends React.Component{
	constructor(){
		super();
	}
	render(){
		const {location} = this.props;
		//const {path} = location.pathname;
		console.log({location});

		return(
			<div className="header">
				<h1></h1>
			</div>
		);
	}
}