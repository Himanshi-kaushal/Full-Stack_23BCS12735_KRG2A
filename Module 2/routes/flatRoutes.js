import express from "express";
import { getAllFlats, createFlat } from "../controllers/flatController.js";

const router = express.Router();
router.get("/", getAllFlats);
router.post("/", createFlat);

export default router;
