import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import * as postAPI from '../lib/api/post/post';
import {
  POST_REQUEST,
  POST_SUCCESS,
  POST_FAILURE,
  HELLO_SAGA,
} from '../reducer/post';

//서버에다 요청을 보냄
function postsAPI() {
  try {
    return postAPI.getAPI();
  } catch (e) {
    console.error(e);
  }
}

function* posts(action) {
  try {
    const res = yield call(postsAPI);
    console.log(res);
    yield put({
      // put dispatch랑 동일
      type: POST_SUCCESS,
      data: res.data.items,
    });
  } catch (e) {
    yield put({
      type: POST_FAILURE,
    });
  }
}
function* hello() {
  try {
    yield put({
      type: 'HELLO_TWO',
    });
    console.log('hello');
  } catch (e) {}
}
function* helloSaga() {
  //take는 기다리기
  yield takeLatest(HELLO_SAGA, hello);
}

//takeLatest 액션이 dispatch되길 기다려서
//dispatch 될때 login 제너레이터 호출
function* watchPosts() {
  yield takeLatest(POST_REQUEST, posts);
}

export default function* postSage() {
  //이벤트리스너들의 순서는 없다
  yield all([fork(watchPosts), fork(helloSaga)]);
}
