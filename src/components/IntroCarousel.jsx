import React from "react";
import "../CSS/Carousel.css";
import CarouselBox from "./CarouselBox";
import ContainerHead from "./ContainerHead";

const IntroCarousel = () => {
  return (
    <>
      <div className="carousel">
        <ContainerHead
          idx="1"
          head="Introduction"
          para="Put your logic to the test with these warmups! "
        />
        <div className="carousel__bar">
          <CarouselBox
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280"
            heading="Warmup Puzzles"
            para="Get started with some logic warmups."
          />
          <CarouselBox
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth-Seeking-c83EPA.png?width=280"
            heading="Truth-Seeking"
            para="Who or what is telling the truth?"
          />
          <CarouselBox
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Machine_Logic_and_Strategy-jrTuIK-2FIeRk.png?width=280"
            heading="Strategic Deductions"
            para="Stretch the information you're given as far as it can go!"
          />
        </div>
      </div>
    </>
  );
};

export default IntroCarousel;
