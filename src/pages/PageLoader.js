import React from "react";
import logo from "../assets/logo.png";

const PageLoader = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "150px",
          animation: "rotateZoom 5s infinite",
        }}
      />
      <style>
        {`
          @keyframes rotateZoom {
            0% {
              transform: scale(1) rotate(0deg);
            }
            10% {
              transform: scale(1.5) rotate(360deg);
            }
            20% {
              transform: scale(0.7) rotate(720deg);
            }
            30% {
              transform: scale(1.5) rotate(1080deg);
            }
            40% {
              transform: scale(1) rotate(1440deg);
            }
            100% {
              transform: scale(1) rotate(1440deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default PageLoader;