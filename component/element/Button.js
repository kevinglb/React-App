import React from 'react';

export default class Button extends React.Component{
	constructor(props) {
  		super(props);
	}  

	render(){
		var type = this.props.type,
			text = this.props.text,
			disabled = this.props.disabled,
			className = this.props.className,
			data = this.props.data;
			
		return(
			<button className={className} type={type} onClick={this.props.onClick} disabled={disabled} data-key={data}>
				{text}
			</button>
		);
	}
}