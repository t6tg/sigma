import { USER, LOGIN, LOGOUT } from "../types";

const initialState = {
  token: null,
  user: null,
};

export default (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.payload };
    case USER:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { token: null };
    default:
      return state;
  }
};
