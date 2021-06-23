import React from "react";

const CarouselBox = ({ image, heading, para }) => {
  return (
    <>
      <div className="carousel__box">
        <div className="carousel__image">
          <img src={image} alt="" />
        </div>
        <div className="carousel__text2">
          <h2>{heading}</h2>
          <p>{para}</p>
        </div>
      </div>
    </>
  );
};

export default CarouselBox;
