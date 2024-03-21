// App.js
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/Aboutpage/about";
import Home from "./Components/Home/home.jsx";
import { Route, Routes } from "react-router-dom";
import Videos from "./Videography/videogrpahy.jsx";
import Contact from "./Components/Contact/contact.jsx";
import Gallery from "./Components/Gallery/gallery.jsx";


function App() {
  // Define items array with image data
 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
