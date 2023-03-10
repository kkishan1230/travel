import React from "react";
import "./main.css";
import img from "../../assets/img.jpg";
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

const Main = () => {
  const data = [
    {
      id: 1,
      imgSrc: img,
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "CULTURAL RELAX",
      fee: "$700",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam dolor minus non a ducimus odit vel unde ipsa minima, recusandae exercitationem omnis perspiciatis quasi reiciendis? Inventore commodi eius doloribus.",
    },
    {
      id: 2,
      imgSrc: img,
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "CULTURAL RELAX",
      fee: "$700",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam dolor minus non a ducimus odit vel unde ipsa minima, recusandae exercitationem omnis perspiciatis quasi reiciendis? Inventore commodi eius doloribus.",
    },
    {
      id: 3,
      imgSrc: img,
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "CULTURAL RELAX",
      fee: "$700",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam dolor minus non a ducimus odit vel unde ipsa minima, recusandae exercitationem omnis perspiciatis quasi reiciendis? Inventore commodi eius doloribus.",
    },
    {
      id: 4,
      imgSrc: img,
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "CULTURAL RELAX",
      fee: "$700",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam dolor minus non a ducimus odit vel unde ipsa minima, recusandae exercitationem omnis perspiciatis quasi reiciendis? Inventore commodi eius doloribus.",
    },
    {
      id: 5,
      imgSrc: img,
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "CULTURAL RELAX",
      fee: "$700",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam dolor minus non a ducimus odit vel unde ipsa minima, recusandae exercitationem omnis perspiciatis quasi reiciendis? Inventore commodi eius doloribus.",
    },
    {
      id: 6,
      imgSrc: img,
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "CULTURAL RELAX",
      fee: "$700",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam dolor minus non a ducimus odit vel unde ipsa minima, recusandae exercitationem omnis perspiciatis quasi reiciendis? Inventore commodi eius doloribus.",
    },
    {
      id: 7,
      imgSrc: img,
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "CULTURAL RELAX",
      fee: "$700",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam dolor minus non a ducimus odit vel unde ipsa minima, recusandae exercitationem omnis perspiciatis quasi reiciendis? Inventore commodi eius doloribus.",
    },
    {
      id: 8,
      imgSrc: img,
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "CULTURAL RELAX",
      fee: "$700",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam dolor minus non a ducimus odit vel unde ipsa minima, recusandae exercitationem omnis perspiciatis quasi reiciendis? Inventore commodi eius doloribus.",
    },
    {
      id: 9,
      imgSrc: img,
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "CULTURAL RELAX",
      fee: "$700",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam dolor minus non a ducimus odit vel unde ipsa minima, recusandae exercitationem omnis perspiciatis quasi reiciendis? Inventore commodi eius doloribus.",
    },
  ];
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {data.map(
          ({ id, imgSrc, destTitle, location, grade, fee, description }) => {
            return (
              <div key={id} className="singleDestination">
                <div className="imgDiv">
                  <img src={img} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fee flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fee}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
