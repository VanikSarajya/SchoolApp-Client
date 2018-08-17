import {loginReducer} from './reducers/loginReducer';
import {teacherReducer} from './reducers/teacherReducer';
import {classReducer} from './reducers/classReducer';
import {studentReducer} from './reducers/studentReducer';
import {courseReducer} from './reducers/courseReducer';
import {createStore ,applyMiddleware, combineReducers} from 'redux';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import thunk from 'redux-thunk';
import history from './history';

const middleware = routerMiddleware(history);


export default createStore(combineReducers({loginReducer,teacherReducer,classReducer,studentReducer, courseReducer, router: routerReducer}) , applyMiddleware(thunk, middleware) );