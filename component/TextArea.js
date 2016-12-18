import React from 'react';

export default class Button extends React.Component{
	constructor(props) {
  		super(props);
	}  

	render(){
		var type = this.props.type,
			text = this.props.text;
		return(
			<button type={type} onClick={this.props.onClick}>
				{text}
			</button>
		);
	}
}