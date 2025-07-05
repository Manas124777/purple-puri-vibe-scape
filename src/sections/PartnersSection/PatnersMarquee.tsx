import React from "react";
import "./LogoMarquee.css";

const LogoMarquee: React.FC = () => {
  const logos: string[] = [
    "lemme.png",
    "hindustan.jpg",
    "Limitless_White_LOGO.png",
    "lvn.png",
    "hh.jpeg",
    "NETWORK LOGO WHITE.png",
    "O.png",
    "R.png",
    "SN.png",
    "SEW.png",
    "T.jpg",
    "UT.png",
    "TCP.jpg",
  ];

  const animationSpeed = 35; // in seconds

  return (
  < div className="w-full flex justify-center">
    <div className="marquee-wrapper">
      <div className="marquee" style={{ animationDuration: `${animationSpeed}s` }}>
        {[...logos, ...logos].map((logo, index) => (
          <div className="logo" key={index}>
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default LogoMarquee;
