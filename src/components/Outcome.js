import React from "react";
import Grid from "@mui/material/Grid";
import "../assets/styles/Outcome.css";
import skills from "../assets/icons/carbon_notebook-reference.svg";
import recognition from "../assets/icons/IdentificationCard.svg";
import challenge from "../assets/icons/Robot.svg";
import community from "../assets/icons/Vector.svg";

function Outcome() {
  return (
    <div>
      <h2 className="outcome-heading">
        Why Participate in <span className="ai-challenges">AI Challenges?</span>
      </h2>
      <div className="inner-container outcome-container">
        <Grid container spacing={4}>
          <Grid item lg={6} sm={12}>
            <div className="outcome-card">
              <div>
                <img className="img img-fluid" src={skills} alt="Img"></img>
                <h4 className="my-2">Prove your skills</h4>
                <p>
                  Gain substantial experience by solving real-world problems and
                  pit against others to come up with innovative solutions.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} sm={12}>
            <div className="outcome-card">
              <div>
                <img className="img img-fluid" src={community} alt="Img"></img>
                <h4 className="my-2"> Learn from community</h4>
                <p>
                  One can look and analyze the solutions submitted by the other
                  Data Scientists in the community and learn from them.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} sm={12}>
            <div className="outcome-card">
              <div>
                <img className="img img-fluid" src={challenge} alt="Img"></img>
                <h4 className="my-2">Challenge yourself</h4>
                <p>
                  There is nothing for you to lose by participating in a
                  challenge. You can fail safe, learn out of the entire
                  experience and bounce back harder.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} sm={12}>
            <div className="outcome-card">
              <div>
                <img
                  className="img img-fluid"
                  src={recognition}
                  alt="Img"
                ></img>
                <h4 className="my-2">Earn recognition</h4>
                <p>
                  You will stand out from the crowd if you do well in AI
                  challenges, it not only helps you shine in the community but
                  also earns rewards.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Outcome;
