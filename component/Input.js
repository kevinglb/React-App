import React from 'react';


export default class AddContainer extends React.Component{
	constructor(props) {
  		super(props);
	}  

	getDefaultProps(){
		return {
			type: "text",
		};
	}

	onChange(e){
		var val = e.target.value;
		this.porps.onChange(val); 
	}

	render(){
		var type = this.props.type,
			placeholder = this.props.placeholder;
		// var onChange = this.props.onChange;
		return(
			<input type={type} placeholder={placeholder} onChange={this.props.onChange}/>
		);
	}
}