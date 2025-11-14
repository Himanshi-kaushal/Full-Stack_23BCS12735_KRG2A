// module-3-database/data/seed.js
// Node >=16 recommended. Run: node module-3-database/data/seed.js
import fs from "fs";
import path from "path";
import connectDB from "../db-connection/db.js";
import User from "../schemas/User.js";
import Flat from "../schemas/Flat.js";
import Tiffin from "../schemas/Tiffin.js";
import Rental from "../schemas/Rental.js";
import Review from "../schemas/Review.js";

const uri = process.env.MONGO_URI || "mongodb://localhost:27017/campusease";
const dataPath = path.join(process.cwd(), "module-3-database", "sample-data", "seed.json");

const run = async () => {
  try {
    await connectDB(uri);

    const raw = fs.readFileSync(dataPath, "utf-8");
    const json = JSON.parse(raw);

    // Clear existing data
    await User.deleteMany({});
    await Flat.deleteMany({});
    await Tiffin.deleteMany({});
    await Rental.deleteMany({});
    await Review.deleteMany({});

    // Insert users
    const users = await User.insertMany(json.users.map(u => ({ ...u })));
    const userByEmail = Object.fromEntries(users.map(u => [u.email, u._id]));

    // Insert flats (map ownerEmail to ObjectId)
    const flatsToInsert = json.flats.map(f => ({
      title: f.title,
      owner: userByEmail[f.ownerEmail],
      location: f.location,
      price: f.price,
      bedrooms: f.bedrooms,
      description: f.description,
      images: f.images || [],
      tags: f.tags || [],
      contact: f.contact
    }));
    const flats = await Flat.insertMany(flatsToInsert);
    const flatByTitle = Object.fromEntries(flats.map(fl => [fl.title, fl._id]));

    // Tiffins
    const tiffinsToInsert = json.tiffins.map(t => ({
      name: t.name,
      owner: userByEmail[t.ownerEmail],
      pricePerMeal: t.pricePerMeal,
      cuisine: t.cuisine,
      menuSample: t.menuSample,
      contact: t.contact,
      address: t.address
    }));
    await Tiffin.insertMany(tiffinsToInsert);

    // Rentals
    const rentalsToInsert = json.rentals.map(r => ({
      vehicleType: r.vehicleType,
      owner: userByEmail[r.ownerEmail],
      rentPerDay: r.rentPerDay,
      location: r.location,
      contact: r.contact,
      image: r.image
    }));
    await Rental.insertMany(rentalsToInsert);

    // Reviews (map to listingId via flat title)
    const reviewsToInsert = json.reviews.map(rv => ({
      listingType: rv.listingType,
      listingId: flatByTitle[rv.listingTitle] || null,
      user: userByEmail[rv.userEmail] || null,
      rating: rv.rating,
      comment: rv.comment
    }));
    await Review.insertMany(reviewsToInsert);

    console.log("✅ Seeding complete");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
};

run();
