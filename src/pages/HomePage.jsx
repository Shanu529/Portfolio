import React from "react";
import "../App.css"; // fixed path

import Navbar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import Des from "../components/Des.jsx";
import HowBuild from "../components/HowBuild.jsx";
import Project from "../components/Project.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Stack from "../components/Stack.jsx"; // ✅ added
import Form from "../components/Form.jsx";
import Footer from "../components/Footer";
function HomePage() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>
      <AboutMe />
      <Des />
      <HowBuild />
      <Project />
      <Stack />
      <Form />
      <Footer />
    </>
  );
}

export default HomePage;
