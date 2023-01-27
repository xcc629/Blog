import axios from "axios";

type tPostLoginPayload = {
  email: string;
  password: string;
};

export const postLogin = (payload: tPostLoginPayload) =>
  axios.post("/postLogin", payload);
