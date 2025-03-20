import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import "../components/css/Contact.css";

import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const serviceCategories = {
  "Digital Solutions": {
    "Web Development": ["E-commerce", "CMS", "Custom Web Apps"],
    "Mobile Apps": ["iOS Development", "Android Development", "Cross-platform"],
  },
  "Marketing": {
    "Digital Marketing": ["SEO", "Social Media", "PPC Campaigns"],
    "Content Marketing": ["Blog Writing", "Video Production", "Email Marketing"],
  },
  "Design": {
    "UI/UX Design": ["Wireframing", "Prototyping", "User Testing"],
    "Graphic Design": ["Branding", "Print Design", "Digital Assets"],
  }
};

// Flatten services into a single array
const allServices = [];
Object.values(serviceCategories).forEach(category => {
  Object.values(category).forEach(subCategory => {
    allServices.push(...subCategory);
  });
});

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!formData.service) errors.service = "Please select a service";
    if (!formData.comments.trim()) errors.comments = "Comments cannot be empty";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs.send(
        "service_9x70mkj",
        "template_nr9otra",
        formData,
        "x72pe7lZGx0Lzm3WX"
      ).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Message sent successfully! ✅");
          setFormData({
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            phone: "",
            service: "",
            comments: "",
          });
          setErrors({});
        },
        (error) => {
          console.log("FAILED...", error);
          setSuccessMessage("Failed to send message. Try again later.");
        }
      );
    }
  };

  return (
    <section className="contact py-5 bg-light">
      <div className="container">
        <div className="text-center">
          {/* Subheading */}
          <h5 class="section-title ff-secondary font-style-italic text-start text-success fw-normal" data-aos="fade-up">Get in Touch</h5>

          {/* Main Heading */}
          <h2 className="mb-4" data-aos="fade-up">
            Contact Us
          </h2>

          {/* Description */}
          <p className="text-muted mb-5" data-aos="fade-up">
            Have a question or need assistance? Reach out to us today!
          </p>
        </div>
        
        <div className="row align-items-center">

          {/* Contact Info */}
          <div className="col-md-5" data-aos="fade-right">
            <h4>Our Address</h4>
            <p>Igando, Lagos Nigeria.</p>
            <h4>Email Us</h4>
            <p>
              <a href="mailto:akinoladigitalsolutions@gmail.com" className="contact-link">
                akinoladigitalsolutions@gmail.com
              </a>
            </p>
            <h4>Call Us</h4>
            <p>
              <a href="tel:+234(0)810 769 4432" className="contact-link">
                +234(0)810 769 4432
              </a>
            </p>
            
            {/* Social Media Icons */}
            <div className="social-icons mt-4">
              <Link 
                to="https://www.facebook.com/profile.php?id=61558577494667" 
                className="me-3 social-link facebook"
                style={{ color: "#1877F2" }}
                aria-label="Visit our Facebook page"
              >
                <FaFacebook size={24} />
              </Link>
              <Link 
                to="https://x.com/akinoladigsol" 
                className="me-3 social-link twitter-x"
                style={{ color: "#000000" }}
                aria-label="Visit our Twitter page"
              >
                <FaXTwitter size={24} />
              </Link>
              <Link 
                to="https://www.linkedin.com/company/akinola-digital-solutions/" 
                className="me-3 social-link linkedin"
                style={{ color: "#0A66C2" }}
                aria-label="Visit our LinkedIn page"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link 
                to="https://www.instagram.com/akinoladigitalsolutions?" 
                className="social-link instagram"
                style={{ color: "#E4405F" }}
                aria-label="Visit our Instagram page"
              >
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7" data-aos="fade-left">
            <div className="card contact-card shadow p-4">
              <h4 className="mb-3">Send a Message</h4>
              {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name *</label>
                    <input
                      type="text"
                      className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name *</label>
                    <input
                      type="text"
                      className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      placeholder="your.email@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                      placeholder="+234 800 000 0000"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Service Interested In *</label>
                  <select
                    className={`form-select ${errors.service ? "is-invalid" : ""}`}
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a Service</option>
                    {allServices.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && <div className="invalid-feedback">{errors.service}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Comments *</label>
                  <textarea
                    className={`form-control ${errors.comments ? "is-invalid" : ""}`}
                    rows="4"
                    placeholder="How can we help you?"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                  ></textarea>
                  {errors.comments && <div className="invalid-feedback">{errors.comments}</div>}
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="row mt-5">
          <div className="col-12" data-aos="zoom-in">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=tech%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;