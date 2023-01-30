import axios from "axios";

export const createPost = (payload: {}) => axios.post("/api/postPost", payload);

const listService = axios.create({
  baseURL: "/api/getPostList",
});
export const getPostList = (queryString: string) =>
  listService.get(queryString).then((res) => res.data);
