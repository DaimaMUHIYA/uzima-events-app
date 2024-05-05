// import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/header";
import GestionEvent from "../components/GestionEvent/GestionEvent";
import HeroSection from "../components/Hero-section/HeroSection";
import Footer from "../components/Footer/Footer";
import EventsSection from "../components/EventsSetion/EventsSection";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <GestionEvent />
      <HeroSection />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
