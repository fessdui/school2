import {
  REQUESTED_USER,
  REQUESTED_USER_SUCCEEDED,
  REQUESTED_USER_FAILED
} from "./actions";

const initialState = {
  name: "",
  avatar: "",
  loading: false,
  logged: false,
  error: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_USER:
      return { ...state, loading: true };
    case REQUESTED_USER_SUCCEEDED:
      let { name, avatar } = action.payload;
      return { ...state, loading: false, name, avatar, logged: true };
    case REQUESTED_USER_FAILED:
      return { ...state, error: true };
    default:
      return state;
  }
};
