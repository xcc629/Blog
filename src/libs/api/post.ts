import axios from "axios";

type tCreatePostPayload = {
  title: string;
  published: boolean;
  authorId: number;
  seriesId: number;
};

export const createPost = (payload: tCreatePostPayload) =>
  axios.post("/postPost", payload);

export const getPost = () => axios.get("/getPost");

export const getPostList = () => axios.get("/getPostList");
