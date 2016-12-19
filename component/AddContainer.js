import React from 'react';
import Input from './element/Input';
import Button from './element/Button';
import TextArea from './element/TextArea';
// import ListStore from '../store/ListStore';
// import ButtonActions from '../actions/ButtonActions';

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

	// componentDidMount() {
 //    	ListStore.addChangeListener(this._onChange);
 //  	}

 //  	componentWillUnmount() {
 //   	 	ListStore.removeChangeListener(this._onChange);
 //  	}

 //  	_onChange() {
 //    	this.setState({
 //      		items: ListStore.getAll()
 //    	});
 //  	}

	handleClick(e){
		var key = e.target.className;
		if(key.indexOf('clean-btn') !== -1){
			console.log('clean-btn');
			var clean = confirm('R u sure u want to clean it up?');
				if(clean){
					this.setState({
						title: '',
  						time: '',
  						detail : ''
					});
				}
			return;
		}

		if(key.indexOf('save-btn') !== -1){
			alert('save successfully');
			ButtonActions.addToDo(this.state.title,this.state.time, this.state.detail);
			this.setState({title: '',time: '',detail : ''});
			return;
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
				console.log('time changed');
				this.setState({time: e.target.value});
				break;
			case 'detail-textarea':
				console.log('detail changed');
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
					<Button type="button" className="btn btn-success save-btn"  onClick={this.handleClick} text="Save"/>
					<Button className="btn clean-btn btn-danger" onClick={this.handleClick} text="Clean"/>
				</div>
			</div>
		);
	}
}