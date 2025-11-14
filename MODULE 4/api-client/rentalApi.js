// rentalApi.js
import { axiosClient, handleResponse } from "./axiosClient";

export const fetchRentals = (params = {}) => handleResponse(axiosClient.get("/api/rentals", { params }));

export const createRental = (payload) => handleResponse(axiosClient.post("/api/rentals", payload));
