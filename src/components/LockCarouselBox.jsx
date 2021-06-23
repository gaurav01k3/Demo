import React from "react";
import "../CSS/LockCarousel.css";
import LockIcon from "@material-ui/icons/Lock";

const LockCarouselBox = ({ image, heading, para }) => {
  return (
    <>
      <div className="carousel__box">
        <div className="carousel__image">
          <img src={image} alt="" />
          <div className="lockcarousel__over"></div>
          <div className="lock_icon">
            <LockIcon style={{ fontSize: "30px" }} />
          </div>
          <div className="lock_text">
            Included with
            <br />
            Brilliant Premium
          </div>
        </div>
        <div className="carousel__text2">
          <h2>{heading}</h2>
          <p>{para}</p>
        </div>
      </div>
    </>
  );
};

export default LockCarouselBox;
