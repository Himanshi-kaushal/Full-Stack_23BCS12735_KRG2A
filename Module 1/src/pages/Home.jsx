import React from "react";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import ListingCard from "../components/ListingCard";
import { flats, tiffins, rentals } from "../data/mockListings";

export default function Home() {
  const [query, setQuery] = React.useState("");
  const onSearch = (q) => setQuery(q.toLowerCase());

  const filter = (list) => {
    if (!query) return list;
    return list.filter(
      (i) =>
        i.title.toLowerCase().includes(query) ||
        i.area.toLowerCase().includes(query)
    );
  };

  return (
    <div>
      <HeroSection />
      <SearchBar onSearch={onSearch} />
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Featured Flats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filter(flats).map((f) => (
            <ListingCard item={f} key={f.id} />
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Tiffin Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filter(tiffins).map((t) => (
            <ListingCard item={t} key={t.id} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Rentals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filter(rentals).map((r) => (
            <ListingCard item={r} key={r.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
