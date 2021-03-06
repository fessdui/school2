import { put, call } from "redux-saga/effects";
import {
  fetchUser,
  requestUserSuccess,
  requestUserError
} from "./../../redux/user/actions";

export function* fetchLoginAsync(action) {
  let { email, password } = action.payload;
  console.log(email, password, "email");
  try {
    yield put(fetchUser());
    const user = yield call(() => {
      return getUserToken();
    });
    yield put(requestUserSuccess(user));
  } catch (error) {
    yield put(requestUserError());
  }
}

async function getUserToken(emailm, password) {
  /** @todo Перенести в конфиги URL и Endpoint   */
  return await fetch("https://5d5a94b52257cc0014962b03.mockapi.io/v1/getToken/")
    .then(res => res.json())
    .then(response => response.pop().token)
    .then(token => getUser(token));
}

async function getUser(token) {
  /** @todo Перенести в конфиги URL и Endpoint   */
  return await fetch("https://5d5a94b52257cc0014962b03.mockapi.io/v1/user/")
    .then(res => res.json())
    .then(response => response.pop());
}
