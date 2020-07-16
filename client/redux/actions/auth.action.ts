import { LOGIN } from "../types";
import { ILOGIN } from "../../types/auth";
import Router from "next/router";

export const setAuth = (payload: any) => ({
  type: LOGIN,
  payload,
});

const login = ({ username, password }: ILOGIN) => {};

export default {
  login,
};
