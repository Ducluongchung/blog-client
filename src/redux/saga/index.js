import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostSaga(action) {
  const posts = yield call(api.fetchPosts);
  yield put(actions.getPosts.getPostSuccess(posts.data));
}

function* createPostSaga(action) {
  try {
    const posts = yield call(api.createPost, action.payload);
    yield put(actions.createPost.createPostSuccess(posts.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createPost.createPostFailure());
  }
}

function* updatePostSaga(action) {
  try {
    const posts = yield call(api.updatePost, action.payload);
    yield put(actions.updatePost.updatePostSuccess(posts.data));
  } catch (err) {
    console.error(err);
    yield put(actions.updatePost.updatePostFailure());
  }
}

function* deletePostSaga(action) {
  try {
    const posts = yield call(api.deletePost, action.payload.id);
    yield put(actions.deletePost.deletePostSuccess(posts.data));
  } catch (err) {
    console.error(err);
    yield put(actions.deletePost.deletePostFailure());
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
  yield takeLatest(actions.deletePost.deletePostRequest, deletePostSaga);
}
export default mySaga;
