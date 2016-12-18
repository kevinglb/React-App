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
	
	}

	render(){
		var type = this.props.type,
			placeholder = this.props.placeholder,
			className = this.props.className,
			value = this.props.value;
		// var onChange = this.props.onChange;
		return(
			<input type={type} placeholder={placeholder} className={className} value={value} onChange={this.props.onChange}/>
		);
	}
}