import axios from "axios";

export const createPost = (payload: {}) => axios.post("/api/postPost", payload);

export const getPost = (param: string) =>
  axios
    .get("http://localhost:3000/api/getPost", {
      params: {
        postId: param,
      },
    })
    .then((res) => res.data);

const listService = axios.create({
  baseURL: "/api/getPostList",
});
export const getPostList = (queryString: string) =>
  listService.get(queryString).then((res) => res.data);
