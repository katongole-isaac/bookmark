import React from "react";
import IllustrationImage from "../bookmark/images/illustration-hero.svg";
export default function Intro() {
  return (
    <div className="intro-wrapper">
      <div className="container intro">
        <div className="illustration">
          <img src={IllustrationImage} alt="illustration-intro.svg" />
        </div>
        <div className="intro-content">
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="ctrls">
            <button> Get it on Chrome</button>
            <button> Get it on Firefox</button>
          </div>
        </div>
      </div>
    </div>
  );
}
