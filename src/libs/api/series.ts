import axios from "axios";

export type tCreateSeriesPayload = {
  title: string;
  description: string;
};

export const creatSeries = (payload: tCreateSeriesPayload) =>
  axios.post("/postSeries", payload);

export const getSeries = () => axios.get("/getSeries");

export const getSeriesList = () => axios.get("/getSeriesList");
