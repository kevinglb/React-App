
import {FETCH_START,FETCH_COMPLETE,FETCH_ERROR,SET_CITY,SEARCH_AQI,STATION_AUTO_COMPLETE,STATION_AUTO_COMPLETE_FAIL,STATION_AUTO_COMPLETE_SUCCESS} from './constants';
import 'whatwg-fetch';
import store from '../store/store';

export const fetchStart = () => ({
    type: FETCH_START
});

export const fetchComplete = json => ({
    type: FETCH_COMPLETE,
    json: json
});


export const fetchFail = error => ({
    type: 'error',
    error: error
});

export const setCity = city => ({
    type: SET_CITY,
    searchCity: city
});

export const searchAQI = () => ({
    type: 'start',
    fn: fetchAQI
});

const fetchAQI = (dispatch,state) =>{
	let searchUrl = 'http://api.waqi.info/feed/'+ state.aqi.searchCity+ '/?token=demo';

	fetch(searchUrl)
        .then(res => res.json())
        .then(json => {
            console.log(json.status);
            if(json.status == 'ok'){
                dispatch(fetchComplete(json));
            }else{
                dispatch(fetchFail(json));
            }
        })
        .catch((json) => {
            dispatch(fetchFail(json.error));
        });
};

export const fillStation = () =>({
    type: STATION_AUTO_COMPLETE,
    fn: stationAutoComplete
});

const stationAutoComplete = (dispatch,state) => {
    let searchUrl = "https://wind.waqi.info/nsearch/station/" + state.aqi.searchCity;
    console.log(searchUrl);
    fetch(searchUrl)
        .then(res => res.json())
        .then(json => {
            if(json.dt || json.term){
                dispatch(stationAutoSuccess(json));
            }else{
                dispatch(stationAutoFail(json.error));
            }
        })
        .catch((json) => {
            dispatch(stationAutoFail(json.error));
        });
};

export const stationAutoFail = error => ({
    type: STATION_AUTO_COMPLETE_FAIL,
    error: error
});

export const stationAutoSuccess = json => ({
    type: STATION_AUTO_COMPLETE_SUCCESS,
    json: json
});