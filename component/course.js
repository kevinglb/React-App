import React from 'react';

export default class Course extends React.Component{
	constructor(props) {
  		super(props);
  		this.state = {
    		list: [1,2,3,4,5,6,7,8]
  		};
	}  

	render(){
		var listArr = [];
		for(var i = 0;i<this.state.list.length;i++){
			listArr.push(<li key={i}>{this.state.list[i]}</li>);
		}
		setTimeout(function(){
			this.setState({
				list: [2,4,6,8]
			});
		}.bind(this),2000);


		return(
			<ul className="list">
				{listArr}
			</ul>
		);
	}
}