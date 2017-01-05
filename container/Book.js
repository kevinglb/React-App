import React,{Component,PropTypes } from 'react';
import {render} from 'react-dom';
import Button from '../component/element/Button';
import Input from '../component/element/Input';
import {fetchBooks, setTopic} from '../actions/book';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import store from '../store/store';


class Book extends React.Component{
	constructor(props) {
  		super(props);

  		this.state = {
  			searchTopic: 'javascript',
  			getData: false
  		}
  		this.props = this.props;
  		//store.dispatch(fetchBooks('javascript'));
  		this.handleChange = this.handleChange.bind(this);
  		this.handleSearch = this.handleSearch.bind(this);
  	}
  	componentWillMount(){
  		//store.dispatch(fetchBooks('javascript'));
  	}
  	handleChange(e){
  		var topic = e.target.value;
  		this.setState({searchTopic: e.target.value});
  		store.dispatch(setTopic(topic));
  	}

  	handleSearch(e){
  		var topic = this.state.searchTopic;
  		console.log(topic);
  		store.dispatch(fetchBooks(topic));
  		//this.forceUpdate();
  	}

	render(){
		const {bookList,getData} = this.props;
		console.log('bookList: '+ bookList);
		let book ='';
		if(getData){
			const list = bookList.items;
			book = bookList.items.map(function(b,i){
							return (
								<div className="bookItem">
									<a href={b.selfLink} target="_blank">
										<img className="bookImg" src={b.volumeInfo.imageLinks.thumbnail} />
									</a>
									<p className="bookTitle">
										{b.volumeInfo.title} {b.volumeInfo.subtitle}
									</p>
								</div>
							);
						})
		}
		
		return(
			<div className="container">
				<h1>Book Search</h1>
				<div className="bookSearch">
					<label>Topic</label>
					<Input className="bookSearch-input" type="text" value={this.state.searchTopic} onChange={this.handleChange}/>
					<Button className="btn" type="button" text="Search" onClick={this.handleSearch}/>
				</div>
				<div className="bookList">
					{book}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {

		bookList: state.update.bookList,
		getData: state.update.getData
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchBooks,setTopic}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
