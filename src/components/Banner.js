import React from "react";
import Grid from "@mui/material/Grid";
import "../assets/styles/Banner.css";
import banner from "../assets/icons/banner-img.svg";
import Button from "@mui/material/Button";
import ai from "../assets/icons/Group 1000002515.svg";
import ds from "../assets/icons/Group 1000002516.svg";
import aiCha from "../assets/icons/Group 1000002518.svg";

function Banner() {
  return (
    <div className="container-bg">
      <div className="inner-container">
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <div className="heading">
              <h1>Accelerate Innovation with Global AI Challenges</h1>
              <div className="content">
                AI Challenges at DPhi simulate real-world problems. It is a
                great place to put your AI/Data Science skills to test on
                diverse datasets allowing you to foster learning through
                competitions.
                <div style={{ marginTop: 20 }}>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    Create Challenge
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={6}>
            <div className="banner-rocket">
              <img src={banner} alt="File" className="img img-fluid" />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="banner-grid-container">
        <Grid container spacing={3}>
          <Grid item lg={4}>
            <div className="banner-grid">
              <div className="banner-grid-img-div">
                <img src={ai} alt="Icon" />
              </div>
              <div>
                <h3 className="margin-0">100K+</h3>
                <p className="margin-0">AI model Submission</p>
              </div>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="banner-grid">
              <div className="banner-grid-img-div">
                <img src={ds} alt="Icon" />
              </div>
              <div>
                <h3 className="margin-0">50K+</h3>
                <p className="margin-0">Data Scientists</p>
              </div>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="banner-grid no-border">
              <div className="banner-grid-img-div">
                <img src={aiCha} alt="Icon" />
              </div>
              <div>
                <h3 className="margin-0">100K+</h3>
                <p className="margin-0">AI Challenges Hosted</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Banner;
