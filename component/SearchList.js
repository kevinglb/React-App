import React,{Component,PropTypes } from 'react';
import {render} from 'react-dom';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import store from '../store/store';
import {Link} from 'react-router';

export default class SearchList extends React.Component{
	constructor(props) {
  		super(props);

  		this.state = {
  			aqiInfo: '',
  			aqiData: {}
  		}
  		
  		//store.dispatch(fetchBooks('javascript'));
  		this.getInfo = this.getInfo.bind(this);
  		this.getColorStyle = this.getColorStyle.bind(this);
      this.generateList = this.generateList.bind(this);
      this.getFullName = this.getFullName.bind(this);
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
  	

  getColorStyle(aqi){
    if(aqi <= 50){
        return 'green';
      }else if(aqi <= 100){
        return 'yellow';
      }else if(aqi <= 150){
        return 'orange';
      }else if(aqi <= 200){
        return 'red';
      }else{
        return 'purple';
      }
  }

  getFullName(arr){
    var name = '';
    for(var i=0;i<arr.length;i++){
      name += arr[i]+ ' ';
    }
    return name;
  }

  generateList(li,i){
    let aqi = li.s.a,
        country = li.c,
        city= li.s.n[0],
        station = this.getFullName(li.s.n);
    return (
        <li className="col-lg-12" key={'station-'+i}>
          <Link to={'aqi/'+city}>
            <div className={"aqi-info text-center col-lg-3"+this.getColorStyle(aqi)}>
              {aqi}
            </div>
            <div className="aqi-country text-center col-lg-3">
              {country}
            </div>
            <div className="aqi-station col-lg-3">
              {station}
            </div>
            <div className="clearfix"></div>
          </Link>
        </li>
    );
  }
  
	render(){
		const {data} = this.props;
    const fillList = data.map(this.generateList);
    return(
        <ul id="searchList">
          {fillList}
        </ul>
    );
   
	}
}
