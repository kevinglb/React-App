import {BOOK_SEARCH,GETSUCCESS,FETCH_START,FETCH_COMPLETE,FETCH_ERROR,SET_TOPIC} from './constants';
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
    type: FETCH_ERROR,
    error: error
});

// export function getSuccess(data){
// 	return {
// 		type: GETSUCCESS,
//         data: data
// 	};
// }

// export function bookSearch(topic){
// 	return (dispatch, getState) =>{
// 		return fetchBooks(topic);
// 	};
// }

//here the state refers to the global state=> initialState
const fetchBook = (dispatch, state) => {
    //dispatch(fetchStart);
   
    const url = 'https://www.googleapis.com/books/v1/volumes/?q=' + state.update.searchTopic;
    fetch(url)
        .then(res => res.json())
        .then(json => {
            if(json.error){
                dispatch(fetchFail(json.error));
            }else{
                dispatch(fetchComplete(json));
            }
        })
        .catch((json) => {
            dispatch(fetchFail(json.error));
        });
}

export const fetchBooks = () => {
    return {
        type: FETCH_START,
        fn: fetchBook
    };
}


export const setTopic = topic =>{
    return {
        type: SET_TOPIC,
        searchTopic: topic
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

