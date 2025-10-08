import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} CampusEase — Built for students • Contact: campus@ease.example
      </div>
    </footer>
  );
}
