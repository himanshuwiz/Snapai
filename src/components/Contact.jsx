import React from "react";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute py-20 inset-0  bg-opacity-20 backdrop-filter backdrop-blur-lg"></div>

      {/* Content */}
      <div className="relative z-10">
        f
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-300 mb-8">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Contact Information
              </h2>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-gray-200 mr-4" />
                <p className="text-gray-200">contact@snapai.com</p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-gray-200 mr-4" />
                <p className="text-gray-200">+1 (123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-gray-200 mr-4" />
                <p className="text-gray-200">123 SnapAI Lane, City, Country</p>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Location</h2>
              <div className="h-64 bg-gray-400 rounded-lg">Map Placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
