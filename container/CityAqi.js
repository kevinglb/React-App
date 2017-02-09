import React,{Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import Button from '../component/element/Button';
import Input from '../component/element/Input';
import AQIDiv from '../component/AQIDiv';
import {searchAQI, setCity,fillStation} from '../actions/aqi';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import store from '../store/store';

import SearchList  from '../component/SearchList';

class CityAqi extends React.Component{
	constructor(props) {
  		super(props);
  		this.state = {
  			searchCity: '',
  			getData: false
  		}
  		this.props = this.props;

  }
  componentWillMount(){
  	let pathname = this.props.location.pathname;
    let city = pathname.split('/')[2];
    store.dispatch(setCity(city));
    store.dispatch(searchAQI(city));
  }

	componentWillReceiveProps(){
    
	}

	render(){
    const {getAqiData, getFillList} = this.props;
    if(getAqiData){
      var {aqiData} = this.props;
    }


		return(
			<div className="container aqi-container">
				
          <div className="result-group">
            {getAqiData? <AQIDiv data={aqiData} />: null}
          </div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		aqiData: state.aqi.aqiData,
    getAqiData: state.aqi.getAqiData,
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({searchAQI,setCity,fillStation}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityAqi);
