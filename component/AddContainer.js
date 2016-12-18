import React from 'react';
import Input from './element/Input';
import Button from './element/Button';
import TextArea from './element/TextArea';

export default class AddContainer extends React.Component{
	constructor(props) {
  		super(props);
  		this.state = {
  			title: '',
  			time: '',
  			detail : ''
  		};

  		this.handleChange = this.handleChange.bind(this);
    	this.handleClick = this.handleClick.bind(this);
    	this.isEmpty = this.isEmpty.bind(this);
	}  

	handleClick(e){
		var key = e.target.className;
		console.log(key);
		switch(key){
			case 'clean-btn':
				var clean = confirm('R u sure u want to clean it up?');
				if(clean){
					this.setState({
						title: '',
  						time: '',
  						detail : ''
					});
				}
				break;
			case 'save-btn':
				//save all input
				alert('save successfully');
				this.setState({title: '',time: '',detail : ''});
				break;
			default:
				break;
		}
	}

	handleChange(e){
		var key = e.target.className;
		switch(key){
			case 'title-input':
				console.log('title changed');
				this.setState({title: e.target.value});
				break;
			case 'time-input':
				this.setState({time: e.target.value});
				break;
			case 'detail-textarea':
				this.setState({detail: e.target.value});
			default:
				break;
		}
	}

	isEmpty(){
		return !this.state.title && !this.state.detail;
	}

	render(){
		return(
			<div className="">
				<h1>New Todo</h1>
				<Input type="text" className="title-input" placeholder="Event Title" value={this.state.title} onChange={this.handleChange}/>
				<Input type="text" className="time-input" placeholder="Event Time" value={this.state.time}  onChange={this.handleChange}/>
				<TextArea type="text" className="detail-textarea" placeholder="Event Detail" value={this.state.detail} onChange={this.handleChange}/>
				<div className="btnWrap">
					<Button type="button" className="save-btn"  onClick={this.handleClick} text="Save" disabled={this.isEmpty}/>
					<Button className="clean-btn" onClick={this.handleClick} text="Clean"/>
				</div>
			</div>
		);
	}
}