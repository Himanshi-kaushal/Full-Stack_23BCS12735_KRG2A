// module-3-database/schemas/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, index: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true }, // placeholder for demo; hash in real app
  role: { type: String, enum: ["student", "provider", "admin"], default: "student" },
  contact: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Export model (protect re-compilation in hot-reload environments)
export default mongoose.models.User || mongoose.model("User", userSchema);
