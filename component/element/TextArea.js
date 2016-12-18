import React from 'react';

export default class TextArea extends React.Component{
	constructor(props) {
  		super(props);
	}  

	render(){
		var type = this.props.type,
			placeholder = this.props.placeholder,
			className = this.props.className,
			value = this.props.value;
		return(
			<textarea className="detail-textarea" type={type} value={value} placeholder={placeholder} onChange={this.props.onChange}>
			</textarea>
		);
	}
}