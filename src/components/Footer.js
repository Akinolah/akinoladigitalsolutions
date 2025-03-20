import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../components/css/Footer.css";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // Feedback message

  // Show button when user scrolls down 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Email Validation Function
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle Newsletter Subscription
  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setMessage("❌ Please enter a valid email address.");
      return;
    }

    // Here, you can integrate an API call to store the email
    setTimeout(() => {
      setMessage("✅ Subscription successful! Thank you.");
      setEmail(""); // Clear input after success
    }, 1000);
  };

  return (
    <>
      <footer className="footer bg-dark text-light pt-4">
        <div className="container">
          <div className="row">

            {/* Company Info Section */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold mb-3">About Us</h5>
              <p>We provide top-notch web development, mobile applications, UI/UX designs, and IT solutions.</p>
              <p><i className="bi bi-geo-alt-fill me-2"></i>Igando, Lagos Nigeria</p>
              <p><i className="bi bi-envelope-fill me-2"></i>akinoladigitalsolutions@gmail.com</p>
              <p><i className="bi bi-telephone-fill me-2"></i>+234 (0) 8107 694 432</p>
            </div>

            {/* Quick Links */}
            <div className="col-md-2 mb-4">
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
                <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
                <li><Link to="/services" className="text-light text-decoration-none">Services</Link></li>
                <li><Link to="/works" className="text-light text-decoration-none">Works</Link></li>
                <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold mb-3">Our Services</h5>
              <ul className="list-unstyled">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Mobile App Development</li>
                <li>IT Solutions</li>
                <li>Educational Consulting</li>
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold mb-3">Newsletter</h5>
              <p>Subscribe to get the latest updates.</p>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-send"></i>
                  </button>
                </div>
                {message && (
                  <p className="mt-2" style={{ fontSize: "14px", color: message.includes("❌") ? "#ff4d4d" : "#4CAF50" }}>
                    {message}
                  </p>
                )}
              </form>

              {/* Social Media Links */}
              <div className="social-icons mt-5">
                {[
                  { icon: "facebook", url: "https://www.facebook.com/profile.php?id=61558577494667" },
                  { icon: "twitter-x", url: "https://x.com/akinoladigsol" },
                  { icon: "instagram", url: "https://www.instagram.com/akinoladigitalsolutions?" },
                  { icon: "linkedin", url: "https://www.linkedin.com/company/akinola-digital-solutions" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link me-2"
                    aria-label={`Follow us on ${social.icon}`}
                  >
                    <i className={`bi bi-${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright & Terms */}
          <div className="text-center mt-3 border-top pt-3">
            <p className="mb-0">
              © {new Date().getFullYear()} Akinola Digital Solutions. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            backgroundColor: "#007bff", // Primary color
            color: "#fff", // White text
            border: "none",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#0056b3"; // Darker shade on hover
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0px 6px 8px rgba(0, 0, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#007bff";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)";
          }}
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;