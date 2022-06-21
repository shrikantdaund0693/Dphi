import { Grid } from "@mui/material";
import React from "react";
import "../assets/styles/Explore.css";
import HackathonCard from "./HackathonCard";
import data from "../DUMMY";

function Explore() {
  return (
    <>
      <div className="search-filter-container">
        <div className="inner-container">
          <h2 className="explore-heading">Explore Challenges</h2>
          <div className="search-filter-div">
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="challenges-container">
        <div className="inner-container">
          <Grid container spacing={3}>
            {data.map((item) => {
              return (
                <HackathonCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  start={item.start}
                  end={item.end}
                />
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Explore;
