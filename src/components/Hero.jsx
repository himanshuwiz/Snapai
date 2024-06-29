import React from "react";
import {
  FaCamera,
  FaCloudUploadAlt,
  FaUserShield,
  FaImages,
  FaBrain,
  FaCogs,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
  {
    icon: FaCamera,
    title: "AI-Powered Organization",
    description: "Automatically organize your photos with AI.",
  },
  {
    icon: FaCloudUploadAlt,
    title: "File Upload",
    description: "Upload your files.",
  },
  {
    icon: FaUserShield,
    title: "Privacy First",
    description: "Your photos are safe with our top-notch privacy measures.",
  },
  {
    icon: FaImages,
    title: "Gallery Management",
    description: "Easily manage and access your photo galleries.",
  },
  {
    icon: FaBrain,
    title: "Smart Search",
    description: "Find photos quickly with smart search functionality.",
  },
  {
    icon: FaCogs,
    title: "Customizable Settings",
    description:
      "Tailor the app to your preferences with customizable settings.",
  },
];

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center text-white space-y-16 ">
      {/* Main headline and welcome note */}
      <section className="w-full py-60 px-4 md:px-8 lg:px-16 bg-white bg-opacity-5 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-left mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-200">
            Welcome to SnapAI
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200">
            Organize your photos effortlessly with our AI-powered platform.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/signup"
              className="btn-neutral bg-gray-200 text-gray-800 py-3 px-6 rounded-lg transform transition-transform hover:scale-105 bg-opacity-25"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="btn-neutral bg-transparent border-2 border-gray-200 text-gray-200 py-3 px-6 rounded-lg transform transition-transform hover:scale-105"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 h-64 md:h-96 flex justify-center items-center">
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="w-full py-10 px-4 md:px-8 lg:px-16 bg-white bg-opacity-5 backdrop-blur-md rounded-lg">
        <h2 className="text-3xl font-semibold mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-800 bg-opacity-25 rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
              style={{ perspective: "1000px", height: "350px" }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                card.style.transform = `rotateY(${x / 20}deg) rotateX(${
                  y / -20
                }deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotateY(0deg) rotateX(0deg)`;
              }}
            >
              <div className="flex flex-col items-center text-center">
                <feature.icon className="text-4xl mb-4 text-gray-200" />
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-lg text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wall of Love section */}
      <section className="w-full py-36 px-4 md:px-8 lg:px-16 bg-white bg-opacity-10 backdrop-blur-md rounded-lg">
        <h2 className="text-3xl font-semibold mb-12">Wall of Love</h2>
        <div className="overflow-hidden relative h-32">
          <div className="absolute whitespace-nowrap will-change-transform animate-scroll">
            <span className="inline-block mx-4 text-lg font-medium text-white">
              "Best photo organizer I've ever used!"
            </span>
            <span className="inline-block mx-4 text-lg font-medium text-white">
              "SnapAI transformed how I manage my photos."
            </span>
            <span className="inline-block mx-4 text-lg font-medium text-white">
              "Incredible AI features, highly recommend!"
            </span>
            <span className="inline-block mx-4 text-lg font-medium text-white">
              "A must-have for every photographer."
            </span>
            <span className="inline-block mx-4 text-lg font-medium text-white">
              "Secure and reliable, love it!"
            </span>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-white bg-opacity-10 backdrop-blur-md rounded-lg mb-16">
        <h2 className="text-3xl font-semibold mb-12">Pricing</h2>
        <div className="flex flex-col items-center md:flex-row md:justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="p-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4">Pro I</h3>
            <p className="text-lg text-gray-300 mb-4">
              Basic features to get you started.
            </p>
            <p className="text-2xl font-bold mb-8">1.99€ monthly</p>
            <p className=" font-bold mb-8">200GB</p>
            <Link
              to="/signup"
              className="btn-neutral bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transform transition-transform hover:scale-105 bg-opacity-25"
            >
              Get Started
            </Link>
          </div>
          <div className="p-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4">Pro II</h3>
            <p className="text-lg text-gray-300 mb-4">
              Basic features to get you started.
            </p>
            <p className="text-2xl font-bold mb-8">3.99€ monthly</p>
            <p className=" font-bold mb-8">500GB</p>
            <Link
              to="/signup"
              className="btn-neutral bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transform transition-transform hover:scale-105 bg-opacity-25"
            >
              Get Started
            </Link>
          </div>
          <div className="p-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4">Pro III</h3>
            <p className="text-lg text-gray-300 mb-4">
              Basic features to get you started.
            </p>
            <p className="text-2xl font-bold mb-8">8.99€ monthly</p>
            <p className=" font-bold mb-8">2TB</p>
            <Link
              to="/signup"
              className="btn-neutral bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transform transition-transform hover:scale-105 bg-opacity-25"
            >
              Get Started
            </Link>
          </div>
          <div className="p-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4">Pro-IV</h3>
            <p className="text-lg text-gray-300 mb-4">
              Basic features to get you started.
            </p>
            <p className="text-2xl font-bold mb-8">39.99€ monthly</p>
            <p className=" font-bold mb-8">10TB</p>
            <Link
              to="/signup"
              className="btn-neutral bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transform transition-transform hover:scale-105 bg-opacity-25"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
