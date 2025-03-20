import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import aboutimg from "../assets/images/about.jpg";
import AOS from "aos";
import "../components/css/About.css";
import "aos/dist/aos.css";

const AboutSection = () => {
  const [experienceYears, setExperienceYears] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);

  // Technologies we work with
  const technologies = [
    { name: "JavaScript", icon: "fab fa-js-square", color: "#F7DF1E" },
    { name: "React", icon: "fab fa-react", color: "#61DAFB" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
    { name: "Python", icon: "fab fa-python", color: "#3776AB" },
    { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
    { name: "AWS", icon: "fab fa-aws", color: "#FF9900" },
    { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
    { name: "Figma", icon: "fab fa-figma", color: "#F24E1E" },
    { name: "Sketch", icon: "fab fa-sketch", color: "#F7B500" },
    { name: "WooCommerce", icon: "fab fa-wordpress", color: "#96588A" },
    { name: "WordPress", icon: "fab fa-wordpress", color: "#21759B" },
    { name: "Shopify", icon: "fab fa-shopify", color: "#96BF48" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations

    // Experience counter
    const experienceInterval = setInterval(() => {
      if (experienceYears < 3) {
        setExperienceYears((prev) => prev + 1);
      }
    }, 1000);

    // Projects counter
    const projectsInterval = setInterval(() => {
      if (projectsCompleted < 15) {
        setProjectsCompleted((prev) => prev + 1);
      }
    }, 100);

    return () => {
      clearInterval(experienceInterval);
      clearInterval(projectsInterval);
    };
  }, [experienceYears, projectsCompleted]);

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        {/* About us */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h5 class="section-title ff-secondary font-style-italic text-start text-success fw-normal">About Us</h5>
          <p className="lead text-orange">
            Empowering businesses with innovative digital solutions.
          </p>
        </div>

        {/* Image and Text Section */}
        <div className="row gy-4 align-items-center mb-5">
          {/* Image Section */}
          <div className="col-lg-6" data-aos="fade-right">
            <img
              src={aboutimg}
              className="img-fluid rounded shadow-lg"
              alt="Akinola Digital Solutions Team Working on Technology Projects"
              loading="lazy"
            />
          </div>

          {/* Content Section */}
          <div className="col-lg-6" data-aos="fade-left">
            <h2 className="display-6 fw-bold mb-4 text-dark-gray">
              Akinola Digital Solutions
            </h2>
            <p className="lead mb-4 text-light-green">
              We are a <strong>cutting-edge technology firm</strong> dedicated to empowering businesses through innovative digital solutions.
            </p>
            <p className="mb-4 text-dark-gray">
              With expertise in <strong>digital transformation</strong>, <strong>software development</strong>, and <strong>IT consulting</strong>, we help businesses grow, improve efficiency, and achieve exceptional results. Our team is passionate about solving complex problems and unlocking new opportunities through technology.
            </p>

            {/* Stats Section */}
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <div className="d-flex align-items-center bg-white p-3 rounded shadow-sm">
                  <div className="flex-shrink-0 display-5 text-orange me-3 fw-bold">
                    {experienceYears}+
                  </div>
                  <div>
                    <p className="mb-0 text-muted">Years of</p>
                    <h6 className="text-uppercase mb-0 text-dark-gray">Experience</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center bg-white p-3 rounded shadow-sm">
                  <div className="flex-shrink-0 display-5 text-orange me-3 fw-bold">
                    {projectsCompleted}+
                  </div>
                  <div>
                    <p className="mb-0 text-muted">Completed</p>
                    <h6 className="text-uppercase mb-0 text-dark-gray">Projects</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-4" data-aos="fade-up">
          <h2 className="text-center mb-5 fw-bold text-dark-gray">Technologies We Work With</h2>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="tech-badge bg-white p-3 rounded shadow-sm text-center"
                data-aos="zoom-in"
                data-aos-delay={100 * index}
              >
                <i
                  className={`${tech.icon} fa-3x mb-2`}
                  style={{ color: tech.color }}
                ></i>
                <h6 className="text-dark-gray mb-0">{tech.name}</h6>
              </div>
            ))}
          </div>
        </div>

        {/* Read More Button */}
        <div className="text-center mt-5" data-aos="fade-up">
          <Link
            to="/about"
            className="btn btn-orange btn-lg px-5 py-3"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;