import React from "react";
import {
  FaHome,
  FaImages,
  FaUser,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-white backdrop-filter backdrop-blur-lg bg-opacity-15">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            {/* <img src={Logo} alt="SnapAI Logo" className="h-8 w-8 mr-2" /> */}
            <Link to="/">
              <span className="text-2xl text-gray-500 font-semibold">
                SnapAI
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" title="Home" className="flex items-center p-2">
              <FaHome />
            </Link>
            <Link
              to="/gallery"
              title="Photo Gallery"
              className="flex items-center p-2"
            >
              <FaImages />
            </Link>
            <Link
              to="/profile"
              title="Profile"
              className="flex items-center p-2"
            >
              <FaUser />
            </Link>
            <Link to="/about" title="About" className="flex items-center p-2">
              <FaInfoCircle />
            </Link>
            <Link
              to="/contact"
              title="Contact"
              className="flex items-center p-2"
            >
              <FaEnvelope />
            </Link>
            <Link
              to="/login"
              className="btn-neutral bg-gray-200 text-gray py-2 px-4 rounded-lg transform transition-transform hover:scale-105 bg-opacity-5"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="btn-neutral bg-gray-200 text-gray py-2 px-4 rounded-lg transform transition-transform hover:scale-105 bg-opacity-5"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
