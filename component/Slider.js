import React from 'react';

export default class Slider extends React.Component{
	constructor(){
		super();
	}
	
	render(){
		const {location} = this.props;
		console.log({location});
		//const sliderClass === "/" ? "container-fluid" : "container";
		const containerStyle={
			marginTop:"60px"
		};

		return(
			<div className="row">
				
			</div>
		);
	}
}