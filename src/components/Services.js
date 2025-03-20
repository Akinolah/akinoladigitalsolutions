import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCode, FaLaptopCode, FaShoppingCart, FaMobileAlt, FaTools, FaBriefcase, FaBullhorn, FaPaintBrush } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/css/Services.css";

const ServicesSection = () => {
  AOS.init();

  const services = [
    { icon: <FaCode />, title: "Web Development", description: "We create modern, responsive, and user-friendly websites tailored to your business needs." },
    { icon: <FaLaptopCode />, title: "Software Development", description: "Custom software solutions designed to streamline your business operations and improve efficiency." },
    { icon: <FaShoppingCart />, title: "E-commerce Website", description: "Build and optimize online stores to help you sell products and services seamlessly." },
    { icon: <FaMobileAlt />, title: "Mobile App Development", description: "Developing high-performance mobile applications for iOS and Android platforms." },
    { icon: <FaTools />, title: "Website Maintenance", description: "We ensure your website stays up-to-date, secure, and running smoothly at all times." },
    { icon: <FaBriefcase />, title: "Business Profile Design", description: "Professional business profiles and branding materials to make your business stand out." },
    { icon: <FaBullhorn />, title: "Social Media Marketing", description: "Boost your brand’s online presence with targeted social media campaigns." },
    { icon: <FaPaintBrush />, title: "Graphics Design", description: "Visually stunning designs for logos, banners, and marketing materials." },
  ];

  return (
    <section className="services py-5">
      <div className="container text-center">
        {/* Subheading */}
        <h5 className="text-success mb-1 section-title ff-secondary font-style-italic text-start text-primary fw-normal" data-aos="fade-up" data-aos-duration="600" style={{color: "var(--light-green)"}}>
          What We Do
        </h5>
        
        {/* Main Heading */}
        <h2 className="mb-4 text-dark" data-aos="fade-up" data-aos-duration="600">
          Akinola Digital Solutions Services
        </h2>

        {/* Description */}
        <p className="text-dark mb-5" data-aos="fade-up" data-aos-duration="600">
          We provide innovative digital solutions to help businesses grow and succeed in the modern world.
        </p>

        {/* Services Grid */}
        <div className="row">
          {services.map((service, index) => (
            <div
              className="col-md-4 mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100} // Staggered animation
            >
              <div className="service-card card border-0 shadow-sm p-4 h-100 bg-white">
                <div className="service-icon text-orange fs-1 mb-3">{service.icon}</div>
                <h5 className="fw-bold mb-3 text-dark">{service.title}</h5>
                <p className="text-dark">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-6" data-aos="fade-up" data-aos-duration="600">
          <Link to="/services" className="btn btn-orange btn-lg px-6 py-3">
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;