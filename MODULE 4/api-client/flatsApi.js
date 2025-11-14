// flatsApi.js
import { axiosClient, handleResponse } from "./axiosClient";

/**
 * Flats API wrapper
 */

export const fetchFlats = (params = {}) => {
  return handleResponse(axiosClient.get("/api/flats", { params }));
};

export const fetchFlatById = (id) => {
  if (!id) return Promise.resolve({ success: false, error: "id required" });
  return handleResponse(axiosClient.get(`/api/flats/${id}`));
};

export const createFlat = (payload) => {
  return handleResponse(axiosClient.post("/api/flats", payload));
};
