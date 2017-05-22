import React,{Component,PropTypes } from 'react';
import {render} from 'react-dom';
import UndoneList from './UndoneList';
import DoneList from './DoneList';
import Button from '../component/element/Button';
import AddContainer from './AddContainer';

export default class ToDoList extends React.Component{
	constructor(props) {
  		super(props);
  		this.state = {
  			activeIndex: '0',
  			showAddContainer: false
  		};

  		this.handleClick = this.handleClick.bind(this);
  		this.handleAdd = this.handleAdd.bind(this);
	}  

	handleClick(e){
		//var activeIndex = this.state.activeIndex;

		this.setState({activeIndex: e.target.getAttribute('data-key')});
	}

	handleAdd(e){
		this.setState({showAddContainer: true})
	}

	render(){
		return(
			<div className="container">
				<div className="tab">
					<Button text="UnDone" className="btn btn btn-info" onClick={this.handleClick} data='0'/>
					<Button text="Done" className="btn btn btn-info" onClick={this.handleClick} data='1'/>
					<Button text="Add" className="btn glyphicon glyphicon-plus" onClick={this.handleAdd}></Button>
				</div>
				<div>
					{this.state.activeIndex === '0' ? <UndoneList/>: <DoneList/>}
				</div>
				<div>
					{this.state.showAddContainer ? <AddContainer />: null}
				</div>
			</div>
		);
	}
}
