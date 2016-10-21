import {combineReducers} from 'redux';
import UserReducer from './reducer-users';

const allReducers = combineReducers({
  Users: UserReducer
});
