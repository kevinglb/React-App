<<<<<<< HEAD
import React from 'react';
import {render} from 'react-dom';
import Button from '../component/element/Button';
import Input from '../component/element/Input';
import {setCity,searchCityAqi} from '../actions/aqi';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import store from '../store/store';

=======
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
>>>>>>> 4ced95e1ac822359ecad0c160a8e1e35c3ea1a67

class AQI extends React.Component{
	constructor(props) {
  		super(props);
<<<<<<< HEAD

=======
>>>>>>> 4ced95e1ac822359ecad0c160a8e1e35c3ea1a67
  		this.state = {
  			searchCity: '',
  			getData: false
  		}
  		this.props = this.props;
  		this.handleChange = this.handleChange.bind(this);
  		this.handleSearch = this.handleSearch.bind(this);
<<<<<<< HEAD
  	}
  	
  	componentWillMount(){
  		//store.dispatch(fetchBooks('javascript'));
  	}

  	handleChange(e){
  		var city = e.target.value;
  		this.setState({searchCity: city});
  		store.dispatch(setCity(city));
  	}

  	handleSearch(e){
  		var city = this.state.searchCity;
  		store.dispatch(searchCityAqi(city));
  	}

  	componentWillReceiveProps(){
  		const {data,getData} = this.props;
  		this.setState({getData:getData});
  	}

	render(){
		
		
		
		return(
			<div className="container">
				<div className="col-lg-6 col-lg-offset-3">
					<div className="input-group col-lg-6 ">
						<Input type="text" className="form-control" value={this.state.searchCity} onChange={this.handleChange} placeholder="Search City"/>
						<span className="input-group-btn  ">
        			<Button className="btn glyphicon glyphicon-search" type="button" onClick={this.handleSearch}/>
      				</span>
					</div>

          <div className="result-group">
          </div>
				</div>
=======
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

          // <div className="result-group">
          //   {getAqiData? <AQIDiv data={aqiData} />: null}
          // </div>
        </div>
				
>>>>>>> 4ced95e1ac822359ecad0c160a8e1e35c3ea1a67
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
<<<<<<< HEAD
		data: state.aqi.aqiData,
		getData: state.aqi.getData
=======
		aqiData: state.aqi.aqiData,
    fillList: state.aqi.fillList,
    getAqiData: state.aqi.getAqiData,
    getFillList: state.aqi.getFillList
>>>>>>> 4ced95e1ac822359ecad0c160a8e1e35c3ea1a67
	};
}

function mapDispatchToProps(dispatch) {
<<<<<<< HEAD
  return bindActionCreators({searchCityAqi,setCity}, dispatch);
=======
  return bindActionCreators({searchAQI,setCity,fillStation}, dispatch);
>>>>>>> 4ced95e1ac822359ecad0c160a8e1e35c3ea1a67
}

export default connect(mapStateToProps, mapDispatchToProps)(AQI);
