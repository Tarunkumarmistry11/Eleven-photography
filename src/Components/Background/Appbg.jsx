// BackgroundVideo.js

import React from "react";
import "./Appbg.css"; // Import the CSS file for styling

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <video autoPlay muted loop className="background-video">
        <source
          src={require("../assests/pexels-rhys-abel-6344301 (2160p).mp4")}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default BackgroundVideo;
