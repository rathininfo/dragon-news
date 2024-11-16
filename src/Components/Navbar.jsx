import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between my-4 md:my-10 px-4">
      {/* Left Section */}
      <div className="w-full md:w-1/3 flex justify-start mb-4 md:mb-0">
        {/* Optional branding/logo or empty for layout */}
        <h1 className="text-lg md:text-xl font-bold text-gray-800">Brand</h1>
      </div>

      {/* Center Section */}
      <div className="flex gap-4 justify-center items-center text-gray-500 w-full md:w-1/3">
        <Link to="/" className="hover:text-gray-700">
          Home
        </Link>
        <Link to="/career" className="hover:text-gray-700">
          Career
        </Link>
        <Link to="/about" className="hover:text-gray-700">
          About
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex gap-2 justify-end w-full md:w-1/3">
        <div className="text-3xl">
          <FaUserCircle />
        </div>
        <span className="bg-slate-600 text-white py-1 px-4 md:px-6 rounded-md hover:bg-slate-700 cursor-pointer">
          Login
        </span>
      </div>
    </div>
  );
};

export default Navbar;
