export const REQUESTED_USER = "REQUESTED_USER";
export const REQUESTED_USER_SUCCEEDED = "REQUESTED_USER_SUCCEEDED";
export const REQUESTED_USER_FAILED = "REQUESTED_USER_FAILED";
export const FETCHED_USER = "FETCHED_USER";
export const LOGIN_USER = "LOGIN_USER";

/**
 * Get token user start.
 */
export const loginUser = (email, password) => {
  return { type: LOGIN_USER, payload: { email, password } };
};
/**
 * Get user token  end.
 */
export const fetchUser = () => {
  return { type: FETCHED_USER };
};

export const requestUser = () => {
  return { type: REQUESTED_USER };
};

export const requestUserSuccess = user => {
  return { type: REQUESTED_USER_SUCCEEDED, payload: user };
};

export const requestUserError = () => {
  return { type: REQUESTED_USER_FAILED };
};
