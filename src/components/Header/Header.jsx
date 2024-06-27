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
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-filter-lg bg-opacity-15">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            {/* <img src={Logo} alt="SnapAI Logo" className="h-8 w-8 mr-2" /> */}
            <a href="/">
              <span className="text-2xl text-gray-500 font-semibold" href="/">
                SnapAI
              </span>
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <a href="/" title="Home" className="flex items-center p-2">
              <FaHome />
            </a>
            <a
              href="/gallery"
              title="Photo Gallery"
              className="flex items-center p-2"
            >
              <FaImages />
            </a>
            <a
              href="/profile"
              title="Profile"
              className="flex items-center p-2"
            >
              <FaUser />
            </a>
            <a href="/about" title="About" className="flex items-center p-2">
              <FaInfoCircle />
            </a>
            <a
              href="/contact"
              title="Contact"
              className="flex items-center p-2"
            >
              <FaEnvelope />
            </a>
            <Link
              to="/login"
              className="btn-neutral bg-gray-200 text-gray py-2 px-4 rounded-lg transform transition-transform hover:scale-105 bg-opacity-5 "
            >
              Login
            </Link>

            <button className="btn-neutral bg-gray-200  text-gray py-2 px-4 rounded-lg transform transition-transform hover:scale-105 bg-opacity-5 ">
              SignUp
            </button>
            {/* <button onClick={handleLogout} title="Logout"><FaSignOutAlt /></button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
