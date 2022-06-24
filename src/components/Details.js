import React, { useState, useEffect } from "react";
import level from "../assets/icons/carbon_skill-level-basic.svg";
import "../assets/styles/Details.css";
import watch from "../assets/icons/timers.png";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Details({ challenges, setChallenges }) {
  const [details, setDetails] = useState({});
  const { challengeId } = useParams();
  useEffect(() => {
    const val = challenges.find((item) => {
      return item.id == challengeId;
    });
    if (val) {
      setDetails(val);
    }
  }, []);

  const handleDelete = (e) => {
    const newC = challenges.filter((item) => {
      return item.id != challengeId;
    });
    setChallenges(newC);
  };
  return (
    <>
      {details && (
        <div>
          <div className="details-container">
            <div className="inner-container">
              <span className="timeLabel">
                <img src={watch} alt="Timer" width={30}></img>
                Starts on {details.start?.toString()}
              </span>
              <h2 className="hack-heading">{details.name}</h2>
              <p className="hack-content">
                Identify the class to which each butterfly belongs to
              </p>
              <span className="level-para">
                <img src={level} alt="Level" className="level-img" />
                {details.level}
              </span>
            </div>
          </div>
          <div className="naviation-details">
            <div className="inner-container navigation-hubs">
              <div>
                <span className="nav-link">Overview</span>
              </div>
              <div>
                <Link
                  className="edit-btn button"
                  to={`/create-challenge/${challengeId}`}
                >
                  Edit
                </Link>
                <button className="delete-btn button" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="description-container">
            <div className="inner-container">
              <p>{details.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Details;
