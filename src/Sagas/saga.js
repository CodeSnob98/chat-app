import { takeLatest, put, call } from "redux-saga/effects";
import { fetchChatData, fetchUsers } from "./../api/api";

function* openChatsAsync(v) {
  yield put({ type: "OPEN_CHATS_SAGA", payload: v.payload });
}

function* addUserAsync(v) {
  yield put({ type: "ADD_USER_SAGA", payload: v.payload });
}
function* fetchUserAsync() {
  let data = yield call(fetchUsers);
  yield put({ type: "FETCH_USER_SAGA", payload: data });
}
function* addChatsAsync(v) {
  let data = yield call(fetchChatData);
  if (v && v.payload) {
    yield put({ type: "ADD_CHATS_SAGA", payload: v.payload });
  } else {
    yield put({ type: "ADD_CHATS_SAGA", payload: data });
  }
}
export function* watcherSaga() {
  yield takeLatest("ADD_CHATS", addChatsAsync);
  yield takeLatest("ADD_USER", addUserAsync);
  yield takeLatest("OPEN_CHATS", openChatsAsync);
  yield takeLatest("FETCH_USER", fetchUserAsync);
}
