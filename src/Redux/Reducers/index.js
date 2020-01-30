import { clickReducer, clickArrayReducer} from './clickReducer';
import {combineReducers} from 'redux';

// debugger
export const Reducers = combineReducers({
    clickState: clickReducer,
    clickStateArray: clickArrayReducer
});
// debugger