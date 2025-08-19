import React from "react";
import { Link } from "react-router-dom";
import logo from "./photo_2025.jpeg"; // ✅ import your local image

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg px-8 py-4 flex justify-between items-center">
      {/* Logo + Brand */}
      <Link to="/photo_2025" className="flex items-center space-x-3">
        <img
          src={logo}
          alt="StrayCare Logo"
          className="h-15 w-15 rounded-full object-cover"
        />
        <span className="text-2xl font-bold text-gray-800 hover:text-green-600 transition-colors">
          StrayCare
        </span>
      </Link>

      {/* Nav Links */}
      <div className="space-x-6 hidden md:flex">
        <Link
          to="/"
          className="text-gray-700 hover:text-green-600 font-semibold transition-colors"
        >
          Home
        </Link>
        <Link
          to="/reports"
          className="text-gray-700 hover:text-green-600 font-semibold transition-colors"
        >
          Reports
        </Link>
        <Link
          to="/adoptions"
          className="text-gray-700 hover:text-green-600 font-semibold transition-colors"
        >
          Adoptions
        </Link>
        <Link
          to="/lost-pets"
          className="text-gray-700 hover:text-green-600 font-semibold transition-colors"
        >
          Lost Pets
        </Link>
      </div>
    </nav>
  );
}
