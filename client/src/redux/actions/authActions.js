import axios from "axios";
import config from "../../configure";
import { browserHistory } from "react-router";
import jwtDecode from "jwt-decode";

const BASE_URL = config.BASE_URL;

export const signin = ({ username, password }) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `${BASE_URL}/user/login`,
      data: { username, password },
    })
      .then((res) => {
        localStorage("token", res.data.access_token);
        browserHistory.push("/");
        const token = localStorage.getItem("token");
        dispatch({
          type: "AUTH_USER",
          payload: jwtDecode(token),
        });
      })
      .catch(() => {
        dispatch({ type: "AUTH_ERROR", payload: "Bad Signin Info" });
      });
  };
};

export const signout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: "UNAUTH_USER" });
  };
};
