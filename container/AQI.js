import React from 'react';
import {render} from 'react-dom';
import Button from '../component/element/Button';
import Input from '../component/element/Input';
import {setCity,searchCityAqi} from '../actions/aqi';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import store from '../store/store';


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
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		data: state.aqi.aqiData,
		getData: state.aqi.getData
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({searchCityAqi,setCity}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AQI);
