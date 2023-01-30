import { NextApiResponse } from "next";

export interface IErrorMessage {
  message: String;
}

export interface INextApiResponse<T>
  extends NextApiResponse<T | IErrorMessage> {}
