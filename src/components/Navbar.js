import React from "react";
import "../assets/styles/Navbar.css";
import logo from "../assets/icons/logo.svg";

function Navbar() {
  return (
    <div className="container-fluid navbar-container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default Navbar;
