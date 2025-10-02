import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navBar.jsx";
import Hero from "./components/Hero.jsx";
import Des from "./components/des.jsx";
// import HowBuild from "./components/HowBuild.jsx";
import HowBuild from "./components/howBuild.jsx";
import Project from "./components/project.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Stack from "./components/Stack.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer";
// import { Router } from "react-router-dom";

import ProjectDetails from "./pages/ProjectDetails";

import HomePage from "./pages/HomePage";

import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProjectDetails" element={<ProjectDetails />} />
        </Routes>
      </>
    </>
  );
}

export default App;
