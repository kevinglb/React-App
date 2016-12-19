import React from 'react';
import {Link} from	'react-router';
import Navigation from './navigation';


export default class Layout extends React.Component{
	constructor(){
		super();
	}
	
	render(){
		const {location} = this.props;
		console.log(location);
		const containerClass = location.pathname === "/" ? "container-fluid" : "container";
		const containerStyle={
			marginTop:"80px"
		};
		return(
			<div>
				<Navigation />
				<div style={containerStyle}>
					{this.props.children}
				</div>
			</div>
		);
	}
}