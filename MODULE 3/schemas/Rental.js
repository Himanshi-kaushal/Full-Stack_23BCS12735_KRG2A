// module-3-database/schemas/Rental.js
import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema({
  vehicleType: { type: String, required: true }, // e.g., Bike, Car
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rentPerDay: { type: Number, required: true },
  location: { type: String },
  contact: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Rental || mongoose.model("Rental", rentalSchema);
