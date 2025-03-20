import React, { useState, useEffect } from "react";
import PageLoader from "./PageLoader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaReact, FaNodeJs, FaPython, FaPhp, FaAws, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaFigma, } from "react-icons/fa"; // React Icons for technologies
import { SiMongodb, SiExpress, SiPostgresql, SiDocker, SiTailwindcss, SiBootstrap, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd } from "react-icons/si"; // Additional icons

// Images
import AboutImage from "../assets/images/about.jpg";
import MissionImage from "../assets/images/mission.jpg";
import VisionImage from "../assets/images/vision.jpg";
import ValuesImage from "../assets/images/values.jpg";

AOS.init();

function AboutPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="About">
      <Header />
      <main className="container" style={{ padding: "50px 20px" }}>
        {/* About Section */}
        <section data-aos="fade-up" className="about-section" style={{ background: "#f8f9fa", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <h1 className="text-center">About Akinola Digital Solutions</h1>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={AboutImage} alt="About Us" className="img-fluid rounded" />
            </div>
            <div className="col-md-6">
              <p className="lead" style={{color: "orange"}}>
                Welcome to <strong className="text-success">Akinola Digital Solutions</strong>! We are passionate about providing the best solutions for your business. Our team of experienced professionals is dedicated to delivering top-notch service to our clients. We specialize in digital transformation, ensuring businesses stay competitive in a rapidly evolving technological landscape. Through innovation and expertise, we help companies achieve their goals effectively and efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, and Values Section */}
        <section className="card-container mt-5" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {/* Mission Card */}
          <div data-aos="fade-up" data-aos-delay="200" className="card" style={{ flex: 1, background: "#e3f2fd", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", minWidth: "300px" }}>
            <img src={MissionImage} alt="Our Mission" className="img-fluid rounded mb-3" />
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower businesses with state-of-the-art digital solutions that drive growth and innovation. We aim to bridge the gap between technology and business success through tailored services that align with our clients' goals.
            </p>
          </div>

          {/* Vision Card */}
          <div data-aos="fade-up" data-aos-delay="400" className="card" style={{ flex: 1, background: "#c8e6c9", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", minWidth: "300px" }}>
            <img src={VisionImage} alt="Our Vision" className="img-fluid rounded mb-3" />
            <h2>Our Vision</h2>
            <p>
              To be a leading force in the digital transformation landscape, setting new benchmarks for excellence in web solutions, digital branding, and technological innovation worldwide.
            </p>
          </div>

          {/* Values Card */}
          <div data-aos="fade-up" data-aos-delay="600" className="card" style={{ flex: 1, background: "#ffecb3", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", minWidth: "300px" }}>
            <img src={ValuesImage} alt="Our Core Values" className="img-fluid rounded mb-3" />
            <h2>Our Core Values</h2>
            <ul>
              <li><strong>Innovation:</strong> We embrace creativity and cutting-edge technology.</li>
              <li><strong>Integrity:</strong> Transparency and honesty define our approach.</li>
              <li><strong>Customer Focus:</strong> Our clients' success is our top priority.</li>
              <li><strong>Excellence:</strong> We strive for the highest quality in everything we do.</li>
            </ul>
          </div>
        </section>

        {/* Technologies Section */}
        <section data-aos="fade-up" className="mt-5">
          <h2 className="text-center">Technologies We Work With</h2>
          <div className="row justify-content-center mt-4">
            {/* Programming Languages */}
            <div className="col-md-4">
              <h3 className="text-center mb-4">Programming Languages</h3>
              <div className="d-flex flex-wrap justify-content-center gap-4">
                <div className="text-center">
                  <FaHtml5 size={50} className="text-primary" />
                  <p>HTML5</p>
                </div>
                <div className="text-center">
                  <FaCss3Alt size={50} className="text-primary" />
                  <p>CSS3</p>
                </div>
                <div className="text-center">
                  <FaJs size={50} className="text-warning" />
                  <p>JavaScript</p>
                </div>
                
                <div className="text-center">
                  <FaPhp size={50} className="text-primary" />
                  <p>PHP</p>
                </div>
                <div className="text-center">
                  <FaPython size={50} className="text-info" />
                  <p>Python</p>
                </div>
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="col-md-4">
              <h3 className="text-center mb-4">Frameworks & Libraries</h3>
              <div className="d-flex flex-wrap justify-content-center gap-4">
                <div className="text-center">
                  <FaReact size={50} className="text-info" />
                  <p>React</p>
                </div>
                <div className="text-center">
                  <FaNodeJs size={50} className="text-success" />
                  <p>Node.js</p>
                </div>
                <div className="text-center">
                  <SiExpress size={50} className="text-dark" />
                  <p>Express</p>
                </div>
                <div className="text-center">
                  <SiBootstrap size={50} className="text-danger" />
                  <p>Bootstrap5</p>
                </div>
                <div className="text-center">
                  <SiTailwindcss size={50} className="text-danger" />
                  <p>Tailwind CSS</p>
                </div>
                <div className="text-center">
                  <FaAws size={50} className="text-success" />
                  <p>AWS</p>
                </div>
              </div>
            </div>

            {/* Databases & Tools */}
            <div className="col-md-4">
              <h3 className="text-center mb-4">Databases & Tools</h3>
              <div className="d-flex flex-wrap justify-content-center gap-4">
                <div className="text-center">
                  <SiMongodb size={50} className="text-success" />
                  <p>MongoDB</p>
                </div>
                <div className="text-center">
                  <SiPostgresql size={50} className="text-primary" />
                  <p>PostgreSQL</p>
                </div>
                <div className="text-center">
                  <FaGitAlt size={50} className="text-dark" />
                  <p>Git</p>
                </div>
                <div className="text-center">
                  <SiDocker size={50} className="text-info" />
                  <p>Docker</p>
                </div>
              </div>
            </div>

            {/* Graphic Design Tools */}
            <div className="col-md-4">
              <h3 className="text-center mb-4">Graphic Design Tools</h3>
              <div className="d-flex flex-wrap justify-content-center gap-4">
                <div className="text-center">
                  <FaFigma size={50} className="text-danger" />
                  <p>Figma</p>
                </div>
                <div className="text-center">
                  <SiAdobephotoshop size={50} className="text-primary" />
                  <p>Photoshop</p>
                </div>
                <div className="text-center">
                  <SiAdobeillustrator size={50} className="text-warning" />
                  <p>Illustrator</p>
                </div>
                <div className="text-center">
                  <SiAdobexd size={50} className="text-danger" />
                  <p>Adobe XD</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section data-aos="fade-up" className="text-center mt-5">
          <h2>Ready to Build Your Amazing Website?</h2>
          <p className="lead">Let us help you digitize and promote your business online.</p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Contact Us Now
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;