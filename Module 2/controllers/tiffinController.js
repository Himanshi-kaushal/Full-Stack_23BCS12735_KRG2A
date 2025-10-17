import Tiffin from "../models/Tiffin.js";

export const getAllTiffins = async (req, res) => {
  try {
    const tiffins = await Tiffin.find();
    res.json(tiffins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTiffin = async (req, res) => {
  try {
    const tiffin = new Tiffin(req.body);
    const savedTiffin = await tiffin.save();
    res.status(201).json(savedTiffin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
