import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email"; // Import email icon
import FacebookIcon from "@mui/icons-material/Facebook"; // Import Facebook icon
import InstagramIcon from "@mui/icons-material/Instagram"; // Import Instagram icon
import EmailImage from "../assests/mail.png"; // Import email image
import FacebookImage from "../assests/facebook colored (1).png"; // Import Facebook image
import InstagramImage from "../assests/instagram colored.png"; // Import Instagram image
import "./contact.css"; // Import external CSS file

export default function MultiActionAreaCard() {
  const handleEmailClick = () => {
    window.location.href = "mailto:mistrykumartarun@gmail.com"; // Replace with your email
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/yourfacebookpage", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/el3v_3n/", "_blank");
  };

  return (
    <div className="card-container">
      {" "}
      {/* Container for all cards */}
      {/* Email Card */}
      <Card className="custom-card">
        {" "}
        {/* Apply custom-card class */}
        <CardContent className="card-content">
          {" "}
          {/* Apply card-content class */}
          <div className="email-container">
            {" "}
            {/* Apply email-container class */}
            <img src={EmailImage} alt="Email" className="email-image" />{" "}
            {/* Apply email-image class */}
          </div>
          <Typography gutterBottom variant="h5" component="div">
            Contact Me
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Feel free to get in touch with me via email.
          </Typography>
        </CardContent>
        <CardActions className="card-actions">
          {" "}
          {/* Apply card-actions class */}
          <Button
            size="small"
            color="primary"
            startIcon={<EmailIcon />} // Add email icon
            onClick={handleEmailClick} // Call handleEmailClick function on button click
            className="email-button" // Apply email-button class
          >
            Email Me
          </Button>
        </CardActions>
      </Card>
      <Card className="custom-card">
        <CardContent className="card-content">
          <div className="social-container">
            <img src={FacebookImage} alt="Facebook" className="social-image" />
          </div>
          <Typography gutterBottom variant="h5" component="div">
            Facebook
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Connect with me on Facebook.
          </Typography>
          <Button
            size="small"
            color="primary"
            startIcon={<FacebookIcon />}
            onClick={handleFacebookClick}
            className="social-button"
          >
            Facebook
          </Button>
        </CardContent>
      </Card>
      <Card className="custom-card">
        <CardContent className="card-content">
          <div className="social-container">
            <img
              src={InstagramImage}
              alt="Instagram"
              className="social-image"
            />
          </div>
          <Typography gutterBottom variant="h5" component="div">
            Instagram
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Follow me on Instagram.
          </Typography>
          <Button
            size="small"
            color="primary"
            startIcon={<InstagramIcon />}
            onClick={handleInstagramClick}
            className="social-button"
          >
            Instagram
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
