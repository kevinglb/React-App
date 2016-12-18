import React from 'react';
import Slider from '../component/Slider';

export default class Home extends React.Component{
	constructor(props) {
  		super(props);
  		this.state = {
    		name: 'Hello Home'
  		};
	}  

	render(){
		
		

	setTimeout(function(){
		this.setState({
			name: 'Hello World'
		});
	}.bind(this),2000);

		return(
			React.createElement(
      			"div",
      			{className: "container"},
      			'Hello'+this.state.name,
      			this.props.name
    		)
		)
	}
}