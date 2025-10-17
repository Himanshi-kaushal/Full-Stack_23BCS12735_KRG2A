import Rental from "../models/Rental.js";

export const getAllRentals = async (req, res) => {
  try {
    const rentals = await Rental.find();
    res.json(rentals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createRental = async (req, res) => {
  try {
    const rental = new Rental(req.body);
    const savedRental = await rental.save();
    res.status(201).json(savedRental);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
