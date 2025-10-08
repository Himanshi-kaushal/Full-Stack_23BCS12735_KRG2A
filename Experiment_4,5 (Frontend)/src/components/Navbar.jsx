import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    (isActive ? "text-indigo-600" : "text-gray-700") +
    " hover:text-indigo-600 px-2";

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
            CE
          </div>
          <div>
            <div className="font-semibold">CampusEase</div>
            <div className="text-xs text-gray-500">One stop for student living</div>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/flats" className={navClass}>Flats</NavLink>
          <NavLink to="/tiffin" className={navClass}>Tiffin</NavLink>
          <NavLink to="/rentals" className={navClass}>Rentals</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
          <Link to="/login" className="ml-3 px-3 py-1 border rounded text-sm">Login</Link>
        </nav>
      </div>
    </header>
  );
}
