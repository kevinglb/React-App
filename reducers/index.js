import { combineReducers } from 'redux';
import update from './todo';
<<<<<<< HEAD
import aqi from './aqi';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  update,
=======
import aqi from './AQI';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({

>>>>>>> 4ced95e1ac822359ecad0c160a8e1e35c3ea1a67
  aqi,
  routerReducer
});

export default rootReducer;