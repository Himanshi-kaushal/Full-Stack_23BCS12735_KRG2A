// tiffinApi.js
import { axiosClient, handleResponse } from "./axiosClient";

export const fetchTiffins = (params = {}) => {
  return handleResponse(axiosClient.get("/api/tiffins", { params }));
};

export const createTiffin = (payload) => handleResponse(axiosClient.post("/api/tiffins", payload));
