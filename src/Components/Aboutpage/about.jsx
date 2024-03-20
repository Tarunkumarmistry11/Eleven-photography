import React from "react";
import profileImg from "../assests/about.jpg";
import facebookLogo from "../assests/facebook.png";
import instagramLogo from "../assests/instagram.png";
import "./about.css";

const About = () => {
  return (
    <div>
      <h1 className="about">
        <span style={{ color: "orange" }}>E</span>L3V3N
      </h1>
      <p className="about-text">
        Embark on a captivating visual odyssey through my life's photographic
        journey as an Indian-based artist. From humble beginnings at the age of
        15, I fearlessly ventured into the world of photography, driven by an
        insatiable passion to explore and capture the beauty of landscapes.{" "}
        <br />
        <br />
        Over the years, I meticulously honed my craft, mastering the delicate
        art of colour grading, which became the hallmark of my work.
      </p>
      <p className="about-text">
        As I traversed this path, I shared my artistic creations across various
        social media platforms, cultivating a community of nature enthusiasts
        who resonated deeply with my portrayal of the natural world. Their
        unwavering support fueled my ambition to push boundaries further.
      </p>
      <p className="about-text">
        Venturing beyond the still image, I embarked on a new chapter in my
        creative journey, delving into the realm of filmmaking. With each
        cinematic travel video, I embarked on a voyage of discovery, capturing
        the essence of breathtaking destinations and infusing them with dreamy
        colour grading that evokes a sense of wonder and wanderlust.
      </p>
      <p className="about-text">
        Now, as I reflect on this journey, I invite you to join me in
        experiencing the magic firsthand. Explore my collection of presets and
        LUTs, each representing a chapter in my life's work. Let them serve as a
        testament to the evolution of my artistic vision and empower you to
        embark on your own creative voyage, inspired by the beauty that
        surrounds us.
      </p>
      <div>
        <img src={profileImg} alt="Profile Picture" className="profile-image" />
      </div>
      <div className="footer">
        <a
          href="https://www.facebook.com/your-facebook-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={facebookLogo} alt="Facebook Logo" className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/el3v_3n/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img
            src={instagramLogo}
            alt="Instagram Logo"
            className="social-icon"
          />
        </a>
        <p className="copyright">© 2024, EL3V3N</p>
      </div>
    </div>
  );
};

export default About;
