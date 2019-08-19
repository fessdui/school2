import { takeEvery } from "redux-saga";
import { LOGIN_USER } from "./../redux/user/actions";
import { fetchLoginAsync } from "./user/saga";

// Sagas
export function* rootSaga() {
  // yield all([
  //   takeEvery("FRIEND_FETCH_REQUESTED", fetchFriends),
  //   takeEvery("CREATE_USER_REQUESTED", createUser)
  // ]);
  yield takeEvery(LOGIN_USER, fetchLoginAsync);
}
