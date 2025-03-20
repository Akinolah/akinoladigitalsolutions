import React, { useState, useEffect } from "react";
import PageLoader from "./PageLoader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Icons
import {
  FaCode, FaPaintBrush, FaCogs, FaServer, FaShieldAlt, FaHeadset,
  FaMobileAlt, FaLaptopCode, FaPalette, FaChartLine, FaHashtag, FaEnvelope,
  FaDatabase, FaNetworkWired, FaLock, FaShoppingCart, FaBullhorn
} from "react-icons/fa"; // React Icons for services 

AOS.init();

function ServicePage() {
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

  const services = [
    { title: "Web Development", description: "We build responsive and high-performance websites to elevate your brand.", icon: <FaCode size={50} /> },
    { title: "Web Designing", description: "Creative and user-friendly web designs that captivate your audience.", icon: <FaPaintBrush size={50} /> },
    { title: "Web Management", description: "Efficient management and maintenance for your website.", icon: <FaCogs size={50} /> },
    { title: "Web Hosting", description: "Reliable and secure hosting solutions for your website.", icon: <FaServer size={50} /> },
    { title: "Cybersecurity Solutions", description: "Secure your online presence with our cybersecurity services.", icon: <FaShieldAlt size={50} /> },
    { title: "IT Support & Consultancy", description: "Reliable IT solutions and expert consultancy for businesses.", icon: <FaHeadset size={50} /> },
    { title: "App Development", description: "Custom mobile and web applications to enhance business processes.", icon: <FaMobileAlt size={50} /> },
    { title: "Software Development", description: "Customized software solutions tailored to your needs.", icon: <FaLaptopCode size={50} /> },
    { title: "Graphics Design", description: "Eye-catching graphic designs for branding and marketing.", icon: <FaPalette size={50} /> },
    { title: "Digital Marketing", description: "Effective digital marketing strategies to grow your business online.", icon: <FaChartLine size={50} /> },
    { title: "Social Media Management", description: "Expert management of your social media presence for better engagement.", icon: <FaHashtag size={50} /> },
    { title: "Email Marketing", description: "Targeted email campaigns to reach and engage your audience.", icon: <FaEnvelope size={50} /> },
    { title: "Database Management", description: "Optimized and secure database solutions.", icon: <FaDatabase size={50} /> },
    { title: "Networking Solutions", description: "Comprehensive network setup and maintenance services.", icon: <FaNetworkWired size={50} /> },
    { title: "IT Security", description: "Top-notch security solutions to protect your business assets.", icon: <FaLock size={50} /> },
    { title: "E-commerce Solutions", description: "We create user-friendly e-commerce stores to enhance online sales.", icon: <FaShoppingCart size={50} /> },
    { title: "Business Promotion", description: "Strategic promotion plans to boost your business visibility.", icon: <FaBullhorn size={50} /> },
  ];

  return (
    <div className="Service">
      <Header />
      <main className="container" style={{ padding: "50px 20px" }}>
        {/* Service Description Section */}
        <section data-aos="fade-up" className="service-description text-center mb-5">
          <h1 className="text-orange">Our Services</h1>
          <p className="lead text-green">
            Akinola Digital Solutions delivers top-tier IT services, empowering businesses with customized digital solutions that 
            drive growth and innovation. With a proactive approach, we ensure world-class service through rigorous performance monitoring 
            and industry-leading benchmarks. Prioritizing reliability and excellence, we serve as trusted partners, helping 
            organizations thrive in a rapidly evolving technological landscape.
          </p>
        </section>

        {/* Service Cards Section */}
        <section data-aos="fade-up" className="card-container">
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div 
                  className="service-card text-center p-4"
                  style={{ 
                    background: index % 2 === 0 ? "linear-gradient(135deg, #FFA500, #FF8C00)" : "linear-gradient(135deg, #28a745, #218838)", 
                    borderRadius: "10px", 
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
                    color: "#fff", 
                    transition: "transform 0.3s ease" 
                  }}
                >
                  <div className="icon mb-3">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section data-aos="fade-up" className="text-center mt-5">
          <h2 className="text-orange">Ready to Transform Your Business?</h2>
          <p className="lead text-green">Contact us today to get started with our expert services.</p>
          <a href="/contact" className="btn btn-lg" style={{ background: "#FFA500", color: "#fff", padding: "10px 30px", borderRadius: "25px", fontWeight: "bold" }}>
            Contact Us Now
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ServicePage;