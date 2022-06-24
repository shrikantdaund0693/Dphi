import React from "react";
import "../assets/styles/Explore.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CountDown from "./Coutdown";
import group1 from "../assets/cardimage/Group 1000002771.png";
import correct from "../assets/icons/correct.png";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function HackathonCard({ id, name, start, end, image }) {
  return (
    <Grid item lg={4}>
      <div className="grid-card">
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={group1}
            alt="Image 1"
          />
          <CardContent>
            <div className="card-content">
              <div className="label-div">
                <label className="label upcoming">Upcoming</label>
              </div>
              <p className="card-heading">{name}</p>
              <div>
                <label>Starts in</label>
              </div>
              <CountDown futureDate={new Date(end)} />
              <div>
                <Link
                  to={`/details/${id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <span className="participate-button">
                    <img
                      src={correct}
                      alt="correct"
                      className="correct-icon"
                    ></img>
                    Participate Now
                  </span>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Grid>
  );
}

export default HackathonCard;
