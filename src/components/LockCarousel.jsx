import React from "react";
import ContainerHead from "./ContainerHead";
import LockCarouselBox from "./LockCarouselBox";

const LockCarousel = () => {
  return (
    <>
      <div className="carousel">
        <ContainerHead
          idx="2"
          head="The Rational Detective"
          para="Eliminate the impossible and uncover the truth! "
        />
        <div className="carousel__bar">
          <LockCarouselBox
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Riddles_of_Order-uVO6uP.png?width=280"
            heading="Riddles of Order"
            para="What orders do these racers finish in ?"
          />
          <LockCarouselBox
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Riddles_of_Order-uVO6uP.png?width=280"
            heading="Riddles of Order"
            para="What orders do these racers finish in ?"
          />
          <LockCarouselBox
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Riddles_of_Order-uVO6uP.png?width=280"
            heading="Riddles of Order"
            para="What orders do these racers finish in ?"
          />
          <LockCarouselBox
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Riddles_of_Order-uVO6uP.png?width=280"
            heading="Riddles of Order"
            para="What orders do these racers finish in ?"
          />
        </div>
      </div>
    </>
  );
};

export default LockCarousel;
