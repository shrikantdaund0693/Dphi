import React from "react";
import level from "../assets/icons/carbon_skill-level-basic.svg";
import "../assets/styles/Details.css";
import watch from "../assets/icons/timers.png";

function Details() {
  return (
    <div>
      <div className="details-container">
        <div className="inner-container">
          <span className="timeLabel">
            <img src={watch} alt="Timer" width={30}></img>
            Starts on 17th Jun'22 09:00 PM (India Standard Time)
          </span>
          <h2 className="hack-heading">
            Data Sprint 72 - Butterfly Identification
          </h2>
          <p className="hack-content">
            Identify the class to which each butterfly belongs to
          </p>
          <span className="level-para">
            <img src={level} alt="Level" className="level-img" />
            Easy
          </span>
        </div>
      </div>
      <div className="naviation-details">
        <div className="inner-container navigation-hubs">
          <div>
            <span className="nav-link">Overview</span>
          </div>
          <div>
            <button className="edit-btn button">Edit</button>
            <button className="delete-btn button">Delete</button>
          </div>
        </div>
      </div>
      <div className="description-container">
        <div className="inner-container">
          <p>
            Butterflies are the adult flying stage of certain insects belonging
            to an order or group called Lepidoptera. The word "Lepidoptera"
            means "scaly wings" in Greek. This name perfectly suits the insects
            in this group because their wings are covered with thousands of tiny
            scales overlapping in rows.
            <br />
            <br /> An agency of the Governmental Wildlife Conservation is
            planning to implement an automated system based on computer vision
            so that it can identify butterflies based on captured images. As a
            consultant for this project, you are responsible for developing an
            efficient model.
            <br />
            <br /> Your Task is to build an Image Classification Model using CNN
            that classifies to which class of weather each image belongs to.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
