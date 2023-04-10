import React, { useEffect, useState } from "react";
import faqs from "../utils/faqs";
import ArrowIcon from "../bookmark/images/icon-arrow.svg";

export default function Reviews() {
  const [activeFaq, setActiveFaq] = useState(null);

  const handleClick = (id) => {
    if (activeFaq === id) return setActiveFaq(null);
    setActiveFaq(id);
  };
  return (
    <div className="faqs">
      <div className="container">
        <div className="faqs-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Here are some of our FAQS. if you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>

        <div className="faqs-wrapper">
          {faqs.map((faq, id) => (
            <FAQ
              {...faq}
              key={faq.question}
              id={id}
              activeFaq={activeFaq}
              handleClick={handleClick}
            />
          ))}
        </div>

        <div className="btn">
          <button> More Info</button>
        </div>
      </div>
    </div>
  );
}

const FAQ = ({ question, answer, handleClick, id, activeFaq }) => {
  const className = "active-";
  return (
    <>
      <div className="faq">
        <div className="header" onClick={() => handleClick(id)}>
          <p> {question} </p>
          <div
            className={`icon-wrapper ${
              activeFaq === id ? className + "faq" : null
            }`}
            role="button"
            onClick={() => handleClick(id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
              <path
                fill="none"
                stroke="#5267DF"
                stroke-width="3"
                d="M1 1l8 8 8-8"
              />
            </svg>
            {/* <img src={ArrowIcon} alt="icon-arrow.svg" /> */}
          </div>
        </div>
        <div
          className={`content ${
            activeFaq === id ? className + "content" : null
          }`}
        >
          {answer}
        </div>
        <hr />
      </div>
    </>
  );
};
