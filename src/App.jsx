


import { useState } from "react";
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
