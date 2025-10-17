import express from "express";
import { getAllRentals, createRental } from "../controllers/rentalController.js";

const router = express.Router();
router.get("/", getAllRentals);
router.post("/", createRental);

export default router;
