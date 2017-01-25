import { combineReducers } from 'redux';
import update from './todo';
import aqi from './AQI';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({

  aqi,
  routerReducer
});

export default rootReducer;