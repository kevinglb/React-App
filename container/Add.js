import React,{ Component }  from 'react';
import AddContainer from '../component/AddContainer';
import { connect } from 'react-redux';
import {addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from '../actions/action';
class add extends React.Component{
	constructor(props) {
  		super(props);
  		// console.log(this.props);
	}  

	render(){

		return(
			<div className="addContainer">
				<AddContainer onAddClick={text =>dispatch(addTodo(text))} />
			</div>	
		);
	}
}