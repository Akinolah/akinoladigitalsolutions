import React, { useState, useEffect } from "react";
import PageLoader from "./PageLoader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

AOS.init();

function ContactPage() {
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
    <div className="ContactPage">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="contact-hero text-center py-5" style={{ background: "linear-gradient(135deg, #FFA500, #FF8C00)", color: "#fff" }}>
          <div className="container">
            <h1 className="display-4 fw-bold" data-aos="fade-up">Contact Us</h1>
            <p className="lead" data-aos="fade-up" data-aos-delay="200">
              We're here to help! Reach out to us for any inquiries, collaborations, or support.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />

        {/* Testimonials Section */}
        <section className="testimonials py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5" data-aos="fade-up">What Our Clients Say</h2>
            <div className="row">
              <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="card h-100 p-3">
                  <p className="lead">"Akinola Digital Solutions transformed our business with their expertise. Highly recommended!"</p>
                  <p className="text-muted">- Olatowo Abdulquyum</p>
                </div>
              </div>
              <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="400">
                <div className="card h-100 p-3">
                  <p className="lead">"Their team is professional, responsive, and delivers exceptional results."</p>
                  <p className="text-muted">- Ebute Solomon</p>
                </div>
              </div>
              <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="600">
                <div className="card h-100 p-3">
                  <p className="lead">"The best digital solutions provider we've ever worked with. Truly outstanding!"</p>
                  <p className="text-muted">- Bigsam World</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq py-5">
          <div className="container">
            <h2 className="text-center mb-5" data-aos="fade-up">Frequently Asked Questions</h2>
            <div className="row">
              <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="card h-100 p-3">
                  <h4>What services do you offer?</h4>
                  <p>We offer a wide range of services, including web development, mobile apps, digital marketing, and more.</p>
                </div>
              </div>
              <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
                <div className="card h-100 p-3">
                  <h4>How can I get a quote?</h4>
                  <p>Simply fill out the contact form, and we'll get back to you with a detailed quote.</p>
                </div>
              </div>
              <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="600">
                <div className="card h-100 p-3">
                  <h4>Do you provide ongoing support?</h4>
                  <p>Yes, we offer maintenance and support packages to ensure your solutions remain up-to-date.</p>
                </div>
              </div>
              <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="800">
                <div className="card h-100 p-3">
                  <h4>What industries do you work with?</h4>
                  <p>We work with businesses across various industries, including healthcare, education, e-commerce, and more.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;