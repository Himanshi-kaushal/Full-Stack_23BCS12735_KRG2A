import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    // placeholder - in real project call backend
    navigate("/");
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-sm">
      <h1 className="text-xl font-bold mb-4">Login (Demo)</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input required placeholder="Email" className="w-full p-2 border rounded" />
        <input required type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <button className="w-full py-2 bg-indigo-600 text-white rounded">Login</button>
      </form>
    </div>
  );
}
