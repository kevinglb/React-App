<<<<<<< HEAD
import {FETCH_START,FETCH_COMPLETE,FETCH_ERROR,SET_CITY,SEARCH_AQI} from './constants';
import 'whatwg-fetch';
import store from '../store/store';

const fetchStart = () => ({
    type: FETCH_START
});

const fetchComplete = json => ({
=======

import {FETCH_START,FETCH_COMPLETE,FETCH_ERROR,SET_CITY,SEARCH_AQI,STATION_AUTO_COMPLETE,STATION_AUTO_COMPLETE_FAIL,STATION_AUTO_COMPLETE_SUCCESS} from './constants';
import 'whatwg-fetch';
import store from '../store/store';

export const fetchStart = () => ({
    type: FETCH_START
});

export const fetchComplete = json => ({
>>>>>>> 4ced95e1ac822359ecad0c160a8e1e35c3ea1a67
    type: FETCH_COMPLETE,
    json: json
});


<<<<<<< HEAD
const fetchFail = error => ({
    type: FETCH_ERROR,
    error: error
});

//here the state refers to the global state=> initialState
const fetchAqi = (dispatch, state) => {
    //dispatch(fetchStart);
    
    const url = 'https://api.douban.com/v2/book/search?q=' + state.aqi.searchCity;
    fetch(url).then(function(res){
        console.log(res);
        if(res.ok){
            return res.json();
        }else{
            console.log('response is not succeed');
        }
    }).then(json => {
        if(json.error){
            dispatch(fetchFail(json.error));
        }else{
            console.log(json);
            dispatch(fetchComplete(json));
        }
    }).catch((json) => {
        dispatch(fetchFail(json.error));
    });
}

export const searchCityAqi = () => ({
    type: FETCH_START,
    fn: fetchAqi 
});


export const setCity = city =>{
    return {
        type: SET_CITY,
        searchCity: city
    }
}

// export const fetchBook = topic => {
//     let url = 'https://www.googleapis.com/books/v1/volumes/?q=' + topic;
//     fetch(url)
//         .then(res => res.json())
//         .then(json => {
//             if(json.error){
//                  return {
//                     type: FETCH_ERROR
//                  }
//             }else{
//                 console.log(json);
//                 return{
//                     type: FETCH_COMPLETE,
//                     json: json
//                 }
//             }
//         })
//         .catch((json) => {
//              return {
//                 type: FETCH_ERROR,
//                 error: json.error
//              }
//         });
// };

=======
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
>>>>>>> 4ced95e1ac822359ecad0c160a8e1e35c3ea1a67
