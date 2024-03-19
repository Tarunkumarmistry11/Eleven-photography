// App.js
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/Aboutpage/about";
import Home from "./Components/Home/home.jsx";
import { Route, Routes } from "react-router-dom";
import Videos from "./Videography/videogrpahy.jsx";


function App() {
  // Define items array with image data
 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </div>
  );
}

export default App;
