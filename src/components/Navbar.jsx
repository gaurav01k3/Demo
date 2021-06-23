import React from "react";
import Button from "@material-ui/core/Button";
import brilliant from "../images/brilliant.png";
import "../CSS/Navbar.css";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__wrapper">
          <div className="navbar__logo">
            <img src={brilliant} alt="" />
          </div>
          <div className="navbar__links">
            <ul>
              <li>
                <a href="">TODAY</a>
              </li>
              <li>
                <a href="">COURSES</a>
              </li>
              <li>
                <a href="">PRACTICE</a>
              </li>
            </ul>
          </div>
          <div className="search__bar">
            <SearchIcon style={{ fontSize: "20px" }} />
            <input type="text" name="" id="" />
          </div>
          <div className="navbar__button">
            <Button variant="outlined" color="primary">
              START TRIAL
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
