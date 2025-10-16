import React from "react";
import ListingCard from "../components/ListingCard";
import { tiffins } from "../data/mockListings";

export default function Tiffin() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tiffin Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tiffins.map((t) => (
          <ListingCard item={t} key={t.id} />
        ))}
      </div>
    </div>
  );
}
