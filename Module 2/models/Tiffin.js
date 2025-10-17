import mongoose from "mongoose";

const tiffinSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    pricePerMeal: { type: Number, required: true },
    contact: String,
    address: String,
    image: String
  },
  { timestamps: true }
);

const Tiffin = mongoose.model("Tiffin", tiffinSchema);
export default Tiffin;
