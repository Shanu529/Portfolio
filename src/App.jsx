import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
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
