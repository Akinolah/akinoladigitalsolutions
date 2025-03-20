import React, { useState, useEffect } from "react";
import "../components/css/HeroText.css";

const TextContent = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const textArray = [
      "We help innovate and digitalize your business to the world.",
      "Imagine a World where Technology Elevate Human Potentials."
    ];

    if (isPaused) return;

    if (charIndex < textArray[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + textArray[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsPaused(true);
      setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        setIsPaused(false);
      }, 5000);
    }
  }, [charIndex, textIndex, isPaused]);

  return (
    <div className="hero-text-container ps-5">
      <h1 className="hero-title">Welcome to</h1>
      <h1 className="hero-brand">Akinola Digital Solutions</h1>
      <span className="typewriter-text">{displayedText}</span>
      
      <div className="hero-buttons">
        <a 
          href="tel:+2348107694432" 
          className="btn btn-call me-3"
        >
          <i className="bi bi-telephone-fill me-2"></i>
          Call Us
        </a>
        <a 
          href="https://wa.me/2348107694432" 
          className="btn btn-message"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp me-2"></i>
          Message Us
        </a>
      </div>
    </div>
  );
};

export default TextContent;