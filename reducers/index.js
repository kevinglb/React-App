import { combineReducers } from 'redux';
import update from './todo';
import visibilityFilter from './visibilityFilter';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  update,
  routerReducer
});

export default rootReducer;