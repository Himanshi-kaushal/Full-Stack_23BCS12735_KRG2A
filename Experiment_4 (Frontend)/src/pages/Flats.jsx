import React from "react";
import ListingCard from "../components/ListingCard";
import { flats } from "../data/mockListings";

export default function Flats() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Flats near campus</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {flats.map((f) => (
          <ListingCard item={f} key={f.id} />
        ))}
      </div>
    </div>
  );
}
