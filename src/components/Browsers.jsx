import React, { useEffect, useState } from "react";
import browsers from "../utils/browsers";

export default function Browsers() {
  return (
    <div className="browsers">
      <div className="container browsers-insider">
        <div className="header">
          <h1> Download the extension </h1>
          <p>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>

        <div className="browsers-wrapper">
          {browsers.map((tip, id) => (
            <Browser key={tip.title} {...tip} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Browser = ({ version, src, title, alt }) => {
  return (
    <div className="browser">
      <div className="icon">
        <img src={src} alt={alt} />
      </div>
      <div className="description">
        <h2> Add to {title} </h2>
        <p> Minimum version {version} </p>
      </div>
      <div className="actions">
        <button> Add & install Extension </button>
      </div>
    </div>
  );
};
