import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/nav-logo.png";
import navprofile from "../../assets/nav-profile.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="logo" className="nav-logo" />
      <img src={navprofile} className="nav-profile" alt="" />
    </div>
  );
};

export default Navbar;
