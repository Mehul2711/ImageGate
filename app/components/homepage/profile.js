"use client";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa"; // Use a Font Awesome user icon for elegance

export default function Profile({ user, handleLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="absolute top-4 right-4 flex items-center space-x-4">
      <div className="relative">
        {/* Profile Icon */}
        <div
          className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
          onClick={toggleDropdown}
          style={{
            boxShadow: "0 4px 15px rgba(0, 0, 255, 0.6)", // Soft glowing effect
          }}
        >
          <FaUserAlt className="text-2xl" />{" "}
          {/* Using Font Awesome User Icon */}
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg transition-opacity duration-300 z-50">
            <div className="p-4 text-center">
              <p className="text-black mb-2 capitalize text-lg font-semibold">
                {user.fullName}
              </p>

              <button
                onClick={handleLogout}
                className="w-full bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300 ease-in-out"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
