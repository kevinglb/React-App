import React,{Component,PropTypes } from 'react';
import {render} from 'react-dom';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import store from '../store/store';


export default class AQIDiv extends React.Component{
	constructor(props) {
  		super(props);

  		this.state = {
  			aqiInfo: '',
  			aqiData: {}
  		}
  		
  		//store.dispatch(fetchBooks('javascript'));
  		this.getInfo = this.getInfo.bind(this);
  		this.getTime = this.getTime.bind(this);
  		this.getColorStyle = this.getColorStyle.bind(this);
  	}

  getInfo(aqi){
  		if(aqi <= 50){
  			return 'Good';
  		}else if(aqi <= 100){
  			return 'Moderate';
  		}else if(aqi <= 150){
  			return 'Unhealthy for Sensitive Groups';
  		}else if(aqi <= 200){
  			return 'Unhealthy';
  		}else{
  			return 'Very Unhealthy';
  		}
  	}
  	
  getTime(time){
      var d = (new Date(time)).toString().substr(0,24);
  		return d;
  }

  getColorStyle(aqi){
    if(aqi <= 50){
        return 'green';
      }else if(aqi <= 100){
        return 'yellow';
      }else if(aqi <= 150){
        return 'organge';
      }else if(aqi <= 200){
        return 'red';
      }else{
        return 'purple';
      }
  }

	render(){
		const data = this.props.data;

      return(
      <div>
        <div className="aqi-title text-center">
          {data.city.name}: {data.city.name} Air Quality Index (AQI)
        </div>
        <div className="aqi-result col-lg-12 col-md-12 col-sm-12">
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <div className={"aqi-val "+ this.getColorStyle(data.aqi)}>
              {data.aqi}
            </div>
          </div>
          <div className="aqi-info col-lg-6 col-md-6 col-sm-12 text-center">
            <div>
               {this.getInfo(data.aqi)}
            </div>
            <div className="aqi-time">
               {this.getTime(data.time.s)}
            </div>
          </div>
        </div>
      </div>
    );
   
	}
}
