import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicePage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";

const Home = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />  {/* ✅ This ensures HomePage loads only at "/" */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/works" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default Home;