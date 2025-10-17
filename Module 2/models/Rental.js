import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema(
  {
    vehicleType: { type: String, required: true },
    rentPerDay: { type: Number, required: true },
    contact: String,
    location: String,
    image: String
  },
  { timestamps: true }
);

const Rental = mongoose.model("Rental", rentalSchema);
export default Rental;
