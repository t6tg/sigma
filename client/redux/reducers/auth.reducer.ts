import { USER, LOGIN, LOGOUT } from "../types";
import { ILOGIN_PAYLOAD } from "../../types/auth";

const initialState = {
  token: null,
  user: null,
};

export default (
  state = initialState,
  action: { type: any; payload: ILOGIN_PAYLOAD }
) => {
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
