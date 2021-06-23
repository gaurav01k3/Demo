import React from "react";
import "../CSS/Bottom.css";

const Bottom = () => {
  return (
    <>
      <div className="bottom">
        <div className="bottom__wrapper">
          <div className="bottom__text">NEXT STEPS</div>
          <div className="bottom__links">
            <div className="bottom__linkLeft">
              <div className="bottom__linkImage">
                <img
                  src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_fundamentals-KD5NF3.png?width=92"
                  alt=""
                />
              </div>
              <div className="bottom__linkText">
                <h1>Mathematical Fundamentals</h1>
                <p>
                  The essential tools for mastering algebra, logic, and number
                  theory!
                </p>
              </div>
              <div className="bottom__over"></div>
            </div>
            <div className="bottom__linkRight">
              <div className="bottom__linkImage">
                <img
                  src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/cs_fundamentals-B2P79W.png?width=92"
                  alt=""
                />
              </div>
              <div className="bottom__linkText">
                <h1>Computer Science Fundamentals</h1>
                <p>
                  Wrap your mind around computational thinking, from everyday
                  tasks to algorithms.
                </p>
              </div>
              <div className="bottom__over"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
