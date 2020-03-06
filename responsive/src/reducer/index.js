import { combineReducers } from 'redux';
import post from './post';
import user from './user';
/* 리듀서 합치기 */
const rootReducer = combineReducers({
  post,
  user,
});

export default rootReducer;
