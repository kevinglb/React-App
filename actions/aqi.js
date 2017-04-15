import {FETCH_START,FETCH_COMPLETE,FETCH_ERROR,SET_CITY,SEARCH_AQI} from './constants';
import 'whatwg-fetch';
import store from '../store/store';

const fetchStart = () => ({
    type: FETCH_START
});

const fetchComplete = json => ({
    type: FETCH_COMPLETE,
    json: json
});


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

