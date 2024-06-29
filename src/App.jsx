import React from "react";
import Header from "./components/Header/Header";
import VantaBackground from "./components/VantaBackground/VantaBackground";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Photogallery from "./components/Photogallery";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Footer from "./components/Footer.jsx/Footer";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-gray-900">
      <VantaBackground />
      <div className="z-30 w-full">
        <Header />
      </div>
      <main className="flex-grow z-20">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/gallery" element={<Photogallery />} />
        </Routes>
      </main>

      <div className="z-30 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default App;
