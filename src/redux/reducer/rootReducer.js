import {reducer} from './reducer';
import { combineReducers } from 'redux';

export const cartReducer = combineReducers({
    reducer: reducer
});

