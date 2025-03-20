import React, { useState, useEffect } from "react";
import PageLoader from "./PageLoader";
import Header from "../components/Header";
import About from "../components/About";
import ServicesSection from "../components/Services";
import WorkSection from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

 
function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="Home">
      <Header />
      <About />
      <ServicesSection />
      <WorkSection />
      <Contact />
      <Footer />
    </div>
  );
}
 
export default Home;