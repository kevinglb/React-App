import {FETCH_START,FETCH_COMPLETE,FETCH_ERROR,SET_CITY,SEARCH_AQI} from '../actions/constants';

//初始state
const initialState = {
    searchCity: '',
    aqiData: {},
    getData: false
}

// 通过dispatch action进入
export default function aqi(state = initialState, action) {
    // 根据不同的action type进行state的更新
    switch(action.type) {
         case FETCH_START:
            console.log('FETCH_START');
            return state;
            break;
        case FETCH_ERROR:
            console.log('FETCH_ERROR:' + action.error);
            return state;
            break;
        case  FETCH_COMPLETE:
            console.log('FETCH_COMPLETE');
           
            return Object.assign({}, state, {aqiData: action.json,getData:true});
            break;
        case SET_CITY:
            state.searchCity = action.searchCity;
            return state;
            break;
        default:
            return state
    }
}