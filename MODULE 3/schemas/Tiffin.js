// module-3-database/schemas/Tiffin.js
import mongoose from "mongoose";

const tiffinSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  pricePerMeal: { type: Number, required: true },
  cuisine: { type: String },
  menuSample: [{ type: String }],
  contact: { type: String },
  address: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Tiffin || mongoose.model("Tiffin", tiffinSchema);
