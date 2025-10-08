import React from "react";

export default function ListingCard({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="h-36 bg-gray-100 flex items-center justify-center">
        {item.img ? (
          <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
        ) : (
          <div className="text-gray-400">No image</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{item.area}</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="font-bold">{item.price}</div>
            <div className="text-xs text-gray-500 mt-0.5">Contact: {item.contact}</div>
          </div>
          <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">View</button>
        </div>
      </div>
    </div>
  );
}
