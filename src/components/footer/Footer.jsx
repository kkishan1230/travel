import React from "react";
import "./footer.css";
import video from "../../assets/ocean-65560.mp4";

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted></video>
      </div>
    </section>
  );
};

export default Footer;
