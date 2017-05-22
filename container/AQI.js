import React,{Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import Button from '../component/element/Button';
import Input from '../component/element/Input';
import {searchAQI, setCity,fillStation} from '../actions/aqi';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import store from '../store/store';
import AQIDiv from '../component/AQIDiv';
import SearchList  from '../component/SearchList';

class AQI extends React.Component{
	constructor(props) {
  		super(props);
  		this.state = {
  			searchCity: '',
  			getData: false
  		}
  		this.props = this.props;
  		this.handleChange = this.handleChange.bind(this);
  		this.handleSearch = this.handleSearch.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);

  }
  componentWillMount(){
  		//store.dispatch(fetchBooks('javascript'));
  }

  handleChange(e){
  	let city = e.target.value;
  	this.setState({searchCity: e.target.value});
  	
    store.dispatch(setCity(city));
    if(city !== ''){
      store.dispatch(fillStation());
    }
    
  }

  handleKeyPress(e){
    var key = e.key;

  }

  handleSearch(e){
    if(this.searchCity !== ''){
      var city = this.state.searchCity;
      store.dispatch(searchAQI(city));
      this.setState({searchCity: ''});
    }else{
      console.log('please input a city name')
    }
  
  		//this.forceUpdate();
  }

	componentWillReceiveProps(){
    
	}


  getParameterByName(url, name) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

	render(){
  

    const {getAqiData, getFillList} = this.props;
    if(getAqiData){
      var {aqiData} = this.props;
    }

    if(getFillList){
      var {fillList} = this.props;
    }

		return(
			<div className="container aqi-container">
				<div className="col-sm-8 col-sm-offset-2">
          <div className="input-group">
            <Input type="text" className="form-control" placeholder="Search" onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
            <span className="input-group-addon">
              <Button className="glyphicon glyphicon-search" onClick={this.handleSearch} />
            </span> 
          </div>
          <div className="input-auto-complete">
             {(this.state.searchCity.length > 0 && getFillList)? <SearchList data={fillList} />: null}
          </div>

          <div className="result-group">
            {getAqiData? <AQIDiv da
              ta={aqiData} />: null}
          </div>
        </div>
				
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		aqiData: state.aqi.aqiData,
    fillList: state.aqi.fillList,
    getAqiData: state.aqi.getAqiData,
    getFillList: state.aqi.getFillList
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({searchAQI,setCity,fillStation}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AQI);
