import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="rounded-lg bg-white p-6 shadow-sm mb-6 flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1">
        <h1 className="text-2xl font-bold">CampusEase — Student Living, Simplified</h1>
        <p className="mt-2 text-gray-600">
          Find affordable flats, reliable tiffin services, and rentals near your college. Add your own listing — help the community grow.
        </p>
        <div className="mt-4 flex gap-3">
          <Link to="/flats" className="px-4 py-2 bg-indigo-600 text-white rounded">Browse Flats</Link>
          <Link to="/tiffin" className="px-4 py-2 border rounded">Find Tiffin</Link>
        </div>
      </div>
      <div className="w-full md:w-72">
        <div className="bg-indigo-50 border rounded p-3 text-center">
          <div className="text-sm text-gray-700">Have a service to list?</div>
          <div className="mt-2">
            <button className="px-3 py-2 bg-white border rounded">Upload a Listing</button>
          </div>
        </div>
      </div>
    </section>
  );
}
