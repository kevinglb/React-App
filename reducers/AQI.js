import {FETCH_START,FETCH_COMPLETE,FETCH_ERROR,SET_CITY,STATION_AUTO_COMPLETE_FAIL,STATION_AUTO_COMPLETE_SUCCESS} from '../actions/constants';

//初始state
const initialState = {
   searchCity: '',
   aqiData: {},
   fillList: [],
   getAqiData: false,
   getFillList: false
}

// 通过dispatch action进入
export default function aqi(state = initialState, action) {
    // 根据不同的action type进行state的更新
    switch(action.type) {
        case SET_CITY:
            state.searchCity = action.searchCity;
            return state;
            break;
        case 'start':
            console.log('fetch start');
            return state;
            break;
        case  FETCH_COMPLETE:
            console.log('FETCH_COMPLETE');
            state.getAqiData = true;
            return Object.assign({}, state, {aqiData: action.json.data});
            break;
        case 'error':
            console.log('fetch error');
            console.log(action.error);
            return state;
            break;
        case STATION_AUTO_COMPLETE_SUCCESS:
            console.log('FETCH_COMPLETE');
            state.getFillList = true;
            return Object.assign({}, state, {fillList: action.json.results});
            break;
        case STATION_AUTO_COMPLETE_FAIL:
            console.log('station auto complete fails');
            return state;
            break;
        default:
            return state
    }
}