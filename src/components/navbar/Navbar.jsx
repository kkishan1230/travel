import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <section className="navBarSection">
      <div className="header flex">
        <div className="logoDiv">
          <a href="/" className="logo flex">
            <h1>Travel</h1>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
