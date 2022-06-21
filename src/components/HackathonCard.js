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

function HackathonCard() {
  return (
    <Grid item lg={4}>
      <Card>
        <CardActionArea>
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
              <p className="card-heading">
                Data Science Bootcamp - Graded Datathon
              </p>
              <div>
                <label>Starts in</label>
              </div>
              <CountDown futureDate={new Date(2022, 6, 23)} />
              <div>
                <button className="participate-button">
                  <img
                    src={correct}
                    alt="correct"
                    className="correct-icon"
                  ></img>
                  Participate Now
                </button>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default HackathonCard;
