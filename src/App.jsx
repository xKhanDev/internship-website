import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import FeaturedInternship from "./sections/FeaturedInternship";
import Testimonial from "./sections/Testimonial";
import InternshipListing from "./pages/InternshipListing";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedInternship />
      <Testimonial />
    </>
  );
};
const App = () => {
  return (
    <div className="text-white">
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/internship-listing" element={<InternshipListing />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
