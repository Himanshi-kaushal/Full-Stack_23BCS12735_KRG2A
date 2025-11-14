// FetchFlatsComponent.jsx
import React from "react";
import useFetchFlats from "./useFetchFlats";

export default function FetchFlatsComponent() {
  const { data, loading, error, refetch } = useFetchFlats();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-3">Available Flats</h2>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">Error: {JSON.stringify(error)}</div>}
      {!loading && !error && (
        <>
          <button onClick={() => refetch()} className="btn-primary mb-3">Refresh</button>
          <ul>
            {data.length === 0 && <li>No flats found.</li>}
            {data.map(f => (
              <li key={f._id} className="mb-2 p-2 border rounded">
                <div className="font-semibold">{f.title}</div>
                <div>{f.location} — ₹{f.price}</div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
