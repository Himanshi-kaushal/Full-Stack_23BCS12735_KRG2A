// module-3-database/schemas/Review.js
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  listingType: { type: String, enum: ["Flat", "Tiffin", "Rental"], required: true },
  listingId: { type: mongoose.Schema.Types.ObjectId, required: true, index: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Review || mongoose.model("Review", reviewSchema);
