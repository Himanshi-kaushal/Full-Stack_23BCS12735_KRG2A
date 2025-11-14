// module-3-database/schemas/Flat.js
import mongoose from "mongoose";

const flatSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  location: { type: String, required: true, index: true },
  price: { type: Number, required: true, index: true },
  bedrooms: { type: Number, default: 1 },
  description: { type: String },
  images: [{ type: String }],
  tags: [{ type: String }],
  contact: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Text index can be created in production or via mongo shell:
// db.flats.createIndex({ title: "text", description: "text", tags: "text" });

export default mongoose.models.Flat || mongoose.model("Flat", flatSchema);
