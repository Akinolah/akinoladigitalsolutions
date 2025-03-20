import React from "react";
import { useLocation } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import Navbar from "../components/Navbar";
import HeroText from "../components/HeroText";
import AboutHeader from "./headercontent/AboutHeader";
import ServiceHeader from "./headercontent/ServiceHeader";
import WorkHeader from "./headercontent/WorkHeader";
import ContactHeader from "./headercontent/ContactHeader";
import "../components/css/Header.css";

const Header = () => {
  const location = useLocation();

  const renderHeaderContent = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <HeroCarousel />
            <Navbar />
            <HeroText />
          </>
        );
      case "/about":
        return (
          <>
            <HeroCarousel />
            <Navbar />
            <AboutHeader />
          </>
        );
      case "/services":
      return (
          <>
            <HeroCarousel />
            <Navbar />
            <ServiceHeader />
          </>
        );
      case "/works":
        return (
          <>
            <HeroCarousel />
            <Navbar />
            <WorkHeader />
          </>
        );
      case "/contact":
        return (
          <>
            <HeroCarousel />
            <Navbar />
            <ContactHeader />
          </>
        );
      default:
        return null;
    }
  };

  return <header className="header-container">{renderHeaderContent()}</header>;
};

export default Header;