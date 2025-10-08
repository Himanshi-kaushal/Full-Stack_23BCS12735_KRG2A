import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Flats from "../pages/Flats";
import Tiffin from "../pages/Tiffin";
import Rentals from "../pages/Rentals";
import About from "../pages/About";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flats" element={<Flats />} />
      <Route path="/tiffin" element={<Tiffin />} />
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
