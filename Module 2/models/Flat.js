import mongoose from "mongoose";

const flatSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    image: String
  },
  { timestamps: true }
);

const Flat = mongoose.model("Flat", flatSchema);
export default Flat;
