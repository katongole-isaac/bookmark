import React, { useEffect, useRef, useState } from "react";
import BookmarkLogo from "../bookmark/images/logo-bookmark-copy.svg";
import HamburgerIcon from "../bookmark/images/icon-hamburger.svg";
import CloseIcon from "../bookmark/images/icon-close.svg";

import fbIcon from "../bookmark/images/icon-facebook.svg";

import twitterIcon from "../bookmark/images/icon-twitter.svg";

export default function Navbar() {
  const [showBtn, setshowBtn] = useState(false);
  const inputRef = useRef();
  const navRef = useRef();

  const handleNavClose = () => {
    if (inputRef.current.checked) navRef.current.style.top = "100%";
  };

  return (
    <>
      <nav className="nav" ref={navRef}>
        <div className="container nav-bar ">
          <div className="brand">
            <a href="#">
              <img src={BookmarkLogo} alt="bookmark-logo" />
            </a>
            <div className="img-wrapper">
              <label htmlFor="chck">
                <img
                  src={CloseIcon}
                  alt="hamburger.svg"
                  id="open"
                  role="button"
                  onClick={handleNavClose}
                />
              </label>
            </div>
          </div>

          <input
            ref={inputRef}
            type="checkbox"
            name="navigation"
            id="chck"
            hidden
          />

          <div className="nav-links">
            <ul>
              <hr />
              <li>
                <a href="#">FEATURES</a>
              </li>
              <hr />
              <li>
                <a href="#">PRICING</a>
              </li>
              <hr />

              <li>
                <a href="#">CONTACT</a>
              </li>
              <hr />
            </ul>
            <button className="btn">login</button>
          </div>

          <div className="social">
            <div className="img-wrapper">
              <img src={fbIcon} alt="facebook-icon" />
            </div>
            <div className="img-wrapper">
              <img src={twitterIcon} alt="twitter-icon" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
