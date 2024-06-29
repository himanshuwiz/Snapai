import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaImages,
  FaUser,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bottom-0 z-10 bg-white backdrop-filter backdrop-filter-lg bg-opacity-10 ">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between h-16">
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
          </div>
          <div className="text-gray-500">
            &copy; {new Date().getFullYear()} SnapAI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
