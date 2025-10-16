import React from "react";
import ListingCard from "../components/ListingCard";
import { rentals } from "../data/mockListings";

export default function Rentals() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bike / Car Rentals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rentals.map((r) => (
          <ListingCard item={r} key={r.id} />
        ))}
      </div>
    </div>
  );
}
