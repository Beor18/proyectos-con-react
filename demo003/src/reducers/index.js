import { combineReducers } from 'redux';
import posts from './postRecucer';

export default combineReducers({
    posts: posts
});