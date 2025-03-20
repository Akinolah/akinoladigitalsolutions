import React, { useState, useEffect } from "react";
import PageLoader from "./PageLoader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import restaurantImage from "../assets/images/restaurant.jpg";
import ecommerceImage from "../assets/images/KCe.jpg";
import taskManagementImage from "../assets/images/KCe.jpg";

AOS.init();

const projects = [
  {
    id: 1,
    title: "Restaurant Website",
    description: "Modern responsive restaurant platform with online ordering",
    image: restaurantImage,
    link: "https://akinolah.github.io/restaurant",
    liveUrl: "https://akinolah.github.io/restaurant"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack shopping solution with payment integration",
    image: ecommerceImage,
    link: "/projects/e-commerce",
    liveUrl: "https://akinolah.github.io/kayceeexchange"
  },
  {
    id: 3,
    title: "Task Management",
    description: "Collaborative project management dashboard",
    image: taskManagementImage,
    link: "/projects/task-management",
    liveUrl: "https://akinolah.github.io/kayceeexchange"
  },
];

function WorkPage() {
  const [loading, setLoading] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);

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
    <div className="WorkPage">
      <Header />
      
      <main className="container my-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="about-section px-3 py-4 mb-5 rounded-3">
            <h2 className="mb-4">Our Portfolio</h2>
            <p className="lead">
              Explore our curated selection of recent web development projects. 
              Each piece showcases our commitment to innovative design and 
              functional excellence. Hover over projects to see live previews.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {projects.map(project => (
            <div 
              key={project.id}
              className="col-md-4"
              data-aos="zoom-in"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-card position-relative">
                <a 
                  href={project.link} 
                  className="card shadow-lg h-100 text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-img-top position-relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="img-fluid"
                    />
                    {hoveredProject === project.id && (
                      <div className="live-preview-overlay">
                        <iframe
                          title={`live-${project.title}`}
                          src={project.liveUrl}
                          className="w-100 h-100"
                          style={{ border: 'none' }}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-text text-muted">{project.description}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      
      <style jsx>{`
        .project-card {
          transition: transform 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
        }
        
        .live-preview-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          z-index: 2;
          transition: opacity 0.3s ease;
        }
        
        .about-section {
          background: rgba(248, 249, 250, 0.8);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
};

export default WorkPage;