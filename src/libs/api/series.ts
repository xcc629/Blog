import axios from "axios";
import { tSeriesList } from "pages/api/getSeriesList";

export type tCreateSeriesPayload = {
  title: string;
  description: string;
};

export const creatSeries = (payload: tCreateSeriesPayload) =>
  axios.post("/api/postSeries", payload);

const service = axios.create({
  baseURL: "/api/getSeries/",
});
export const getSeries = (queryString: string) =>
  service.get(queryString).then((res) => res.data);

const listService = axios.create({
  baseURL: "/api/getSeriesList",
});
export const getSeriesList = (queryString: string) =>
  listService.get(queryString).then((res) => res.data);
