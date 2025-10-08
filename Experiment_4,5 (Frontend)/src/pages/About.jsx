import React from "react";

export default function About() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h1 className="text-2xl font-bold">About CampusEase</h1>
      <p className="mt-3 text-gray-600">
        CampusEase aims to be the one-stop solution for students to find tiffins,
        affordable flats, rentals and local student-friendly services. Community-driven listing, transparency and reviews (future) are core goals.
      </p>
      <ul className="mt-4 list-disc ml-5 text-gray-600">
        <li>Student-first UX</li>
        <li>Community listings & contributions</li>
        <li>Scalable to more cities and services</li>
      </ul>
    </div>
  );
}
