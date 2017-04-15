import { combineReducers } from 'redux';
import update from './todo';
import aqi from './aqi';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  update,
  aqi,
  routerReducer
});

export default rootReducer;