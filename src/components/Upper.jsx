import React from "react";
import Button from "@material-ui/core/Button";
import "../CSS/Upper.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Upper = () => {
  return (
    <>
      <div className="upper">
        <div className="upper__container">
          <div className="upper__link">
            <ArrowBackIosIcon style={{ fontSize: 10 }} />
            Back to all courses
          </div>
          <div className="upper__wrapper">
            <div className="upper__left">
              <div className="upper__leftH">Logic</div>
              <div className="upper__lefth">
                Stretch your analytic muscles with knights, knaves, logic gates,
                and more!
              </div>
              <div className="upper__leftP1">
                The beginning of our introductory math journey is Logic. Through
                these challenging problem solving exercises, you'll construct
                the critical thinking skills that are the basis for mathematical
                reasoning.
              </div>
              <div className="upper__leftP2">
                You'll use limited information to make predictions – eliminating
                the impossible to uncover the truth. This course builds up to
                some truly mind-bending challenges!
              </div>
              <div className="upper__link2">
                View prerequisites and next steps
              </div>
            </div>
            <div className="upper__right">
              <img
                src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=254"
                alt=""
              />
              <div className="upper__rightRow">
                <div className="upper__rightRowItem">
                  <h1>37</h1>
                  <span>Interactive quizzes</span>
                </div>
                <div className="upper__rightRowItem">
                  <h1>265+</h1>
                  <span>Interactive quizzes</span>
                </div>
              </div>
              <div className="upper__rightButton">
                <Button variant="contained" color="secondary">
                  Continue Course
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upper;
