import {combineReducers} from 'redux';
//reducer data add list
import dataIdReducer from './reducers/dataReducer/dataReducer';

const rootReducer = combineReducers({
  dataIdReducer,
});

export default rootReducer;
