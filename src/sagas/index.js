import { put, call, takeEvery, all } from "redux-saga/effects";
import { getPostList, getUserList, getComment } from "../gateway/gateway";

function* postList() {
  var listResponse = yield call(getPostList);
  var userList = yield call(getUserList);
  var commentlistResponse = yield call(getComment, 1);

  yield put({
    type: "POST_LIST",
    payload: {
      postList: listResponse.data,
      userList: userList.data,
      commentList: commentlistResponse.data
    }
  });
}

function* getPostSaga() {
  yield takeEvery("GET_POST_LIST", postList);
}

export default function* rootSaga() {
  yield all([getPostSaga()]);
}
