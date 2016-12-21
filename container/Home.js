import React from 'react';


export default class Home extends React.Component{
	constructor(props) {
  		super(props);
  		this.state = {
    		name: 'Hello Home'
  		};
	}  

	render(){
		
		
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