import React from "react";
import video from "../../assets/motor-boat-23011.mp4";
import "./home.css";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbApps, TbBrandTripadvisor } from "react-icons/tb";
import { BsListTask } from "react-icons/bs";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Our Packages</span>
          <h1 className="homeTitle">Search your Holiday</h1>
        </div>
        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here..." />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your date</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total">
              <label htmlFor="price">Max price:</label>
              <h1 className="total">$5000</h1>
            </div>
            <div className="input flex">
              <input type="range" max={5000} min={1000} />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>
        <div className="homeFooterIcon flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <TbBrandTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
