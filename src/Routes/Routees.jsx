import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Profile from "../components/Profile";
import Login from "../components/Login";
import Photogallery from "../components/Photogallery";
import Contact from "../components/Contact";
import Signup from "../components/Signup";
const Routees = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gallery" element={<Photogallery />} />
      </Routes>
    </Router>
  );
};

export default Routees;
