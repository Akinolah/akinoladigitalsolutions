import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../components/css/Work.css";

// Images
import ecommerce from "../assets/images/businesswebsite.png";
import bizweb from "../assets/images/e-c.png";
import mobileapp from "../assets/images/moblie.png";
import portfolio from "../assets/images/port web.jpeg";
import socialMedia from "../assets/images/social-media.jpg";
import edu from "../assets/images/Educational Consultant.jpg";

// Projects
const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A fully functional online store with payment integration.",
    image: ecommerce,
  },
  {
    id: 2,
    title: "Business Website",
    description: "A corporate site with a blog and services section.",
    image: bizweb,
  },
  {
    id: 3,
    title: "Mobile App",
    description: "A cross-platform mobile app for booking appointments.",
    image: mobileapp,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase skills & work.",
    image: portfolio,
  },
  {
    id: 5,
    title: "Social Media Marketing Campaign",
    description: "A successful campaign increasing brand awareness.",
    image: socialMedia,
  },
  {
    id: 6,
    title: "Educational Platform",
    description: "An e-learning platform with interactive courses.",
    image: edu,
  },
];

const WorkSection = () => {
  return (
    <section className="work py-5 bg-light">
      <div className="container text-center">
        {/* Subheading */}
        <h5 className="text-success mb-1 section-title ff-secondary font-style-italic text-start text-primary fw-normal" data-aos="fade-up" data-aos-duration="600" style={{color: "var(--light-green)"}}>
          What We' ve Done
        </h5>

        {/* Main Heading */}
        <h2 className="mb-4">Our Work</h2>

        {/* Description */}
        <p className="text-muted mb-5">
          Explore some of the amazing projects we've delivered to our clients.
        </p>

        {/* Projects Grid */}
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-4 mb-4" key={project.id}>
              <div className="card work-card border-0 shadow-sm h-100">
                <div className="work-img-wrapper position-relative">
                  <img
                    src={project.image}
                    className="card-img-top work-img"
                    alt={`${project.title} - Akinola Digital Solutions`} // SEO-friendly alt text
                    loading="lazy"
                  />
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
                  <div className="work-text position-absolute top-50 start-50 translate-middle text-center">
                    <h5 className="fw-bold fs-3 text-white">{project.title}</h5>
                    <p className="text-white fw-bold">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-5">
          <Link to="/works" className="btn btn-primary btn-lg px-5 py-3">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;