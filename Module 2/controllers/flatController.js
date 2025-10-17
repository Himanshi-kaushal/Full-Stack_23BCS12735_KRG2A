import Flat from "../models/Flat.js";

export const getAllFlats = async (req, res) => {
  try {
    const flats = await Flat.find();
    res.json(flats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createFlat = async (req, res) => {
  try {
    const flat = new Flat(req.body);
    const savedFlat = await flat.save();
    res.status(201).json(savedFlat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
