// module-3-database/db-connection/db.js
import mongoose from "mongoose";

/**
 * Connect to MongoDB using mongoose.
 * @param {string} mongoUri - optional MongoDB URI, otherwise process.env.MONGO_URI is used.
 */
const connectDB = async (mongoUri) => {
  const uri = mongoUri || process.env.MONGO_URI || "mongodb://localhost:27017/campusease";
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    throw err;
  }
};

export default connectDB;
