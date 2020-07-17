export interface ILOGIN {
  username: string;
  password: string;
}

export interface ILOGIN_PAYLOAD {
  token: string;
  user: {
    username: string;
  };
}
