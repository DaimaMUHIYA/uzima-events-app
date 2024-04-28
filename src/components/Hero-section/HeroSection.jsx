// import React from 'react';
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="HeroSection">
      <div className="container-hero-section">
        <div className="section-title">
          <h3 className="title">
            Une inscription facile pour participer à nos événements passionnants
          </h3>
          <p className="subtitle">
            Inscrivez-vous rapidement et facilement pour participer à nos
            événements passionnants. Vous pouvez également vous désinscrire si
            nécessaire.
          </p>
        </div>
        <div className="bloc-img">
          <img
            className="online-img"
            src="src/assets/Online connection.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
