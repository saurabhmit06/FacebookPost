import { put, call, takeEvery } from "redux-saga/effects";
import { getPostList } from "../gateway/gateway";

export function* postList() {
  var listResponse = yield call(getPostList);
  yield put({ type: "POST_LIST", payload: listResponse.data });
}

export default function* rootSaga() {
  yield takeEvery("GET_POST_LIST", postList);
}
