import React from 'react';
import AddContainer from './AddContainer';

export default class add extends React.Component{
	constructor(props) {
  		super(props);
	}  

	render(){
		return(
			<div className="addContainer">
				<AddContainer />
			</div>	
		);
	}
}