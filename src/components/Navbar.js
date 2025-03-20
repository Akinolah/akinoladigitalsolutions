import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../assets/logo.png";
import "../components/css/Navbar.css";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  // Handle scroll event to toggle navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Works", path: "/works" },
    { name: "Contact", path: "/contact" },
  ];

  // Social media links
  const socialLinks = [
    { 
      icon: "facebook", 
      url: "https://www.facebook.com/profile.php?id=61558577494667",
      label: "Visit our Facebook page"
    },
    { 
      icon: "twitter-x", 
      url: "https://x.com/akinoladigsol",
      label: "Follow us on X (Twitter)"
    },
    { 
      icon: "instagram", 
      url: "https://www.instagram.com/akinoladigitalsolutions",
      label: "Check our Instagram profile"
    },
    { 
      icon: "linkedin", 
      url: "https://www.linkedin.com/company/akinola-digital-solutions/",
      label: "Connect on LinkedIn"
    }
  ];

  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top ${scrolling || navOpen ? "nav-scrolled" : "nav-transparent"}`}
      aria-label="Main navigation"
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/" aria-label="Return to homepage">
          <img
            src={Logo}
            alt="Akinola Digital Solutions Logo"
            width="120"
            height="120"
            className="brand-logo"
            loading="lazy"
          />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={navOpen}
          aria-label="Toggle navigation"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${navOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navLinks.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.path}
                  className="nav-link hover-underline"
                  end
                  style={({ isActive }) => ({
                    color: isActive ? "#87CEFA" : "#2ecc71", // Light green by default, Lighter Shade when active
                    fontSize: "1.2rem",
                    fontWeight: "600",
                  })}
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Social Media Links */}
          <div className="d-flex align-items-center mt-3 mt-lg-0 social-container">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="social-link hover-grow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  color: "#FF851B",
                  margin: "0 10px",
                  fontSize: "1.5rem",
                }}
              >
                <i className={`bi bi-${social.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;