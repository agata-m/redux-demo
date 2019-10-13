import { combineReducers } from 'redux';
import comments from './comments.js';
import users from './users.js';

const reducer = combineReducers({
  comments,
  users
});

export default reducer;