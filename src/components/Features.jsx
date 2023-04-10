import React, { useState } from "react";
import tabs from "../utils/tabs";

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);

  const handleSetTab = (id) => {
    setActiveTab(id);
  };

  const ctrls = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];

  return (
    <div className="features">
      <div className="container">
        <div className="header">
          <h2> Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices to you
            can access them on the go.
          </p>
        </div>
        <div className="tabs">
          <div className="ctrls">
            <ul>
              {ctrls.map((ctrl, id) => (
                <Link
                  activeTab={activeTab}
                  key={ctrl}
                  name={ctrl}
                  handleClick={handleSetTab}
                  id={id}
                />
              ))}
              <hr />
            </ul>
          </div>
          <div className="tab-section">
            {tabs.map(
              (tab, id) =>
                activeTab === id && <Tab {...tab} key={tab.alt} id={id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const Link = ({ name, handleClick, id, activeTab }) => (
  <>
    <hr />
    <li
      className={activeTab === id ? "active" : null}
      onClick={() => handleClick(id)}
    >
      {" "}
      {name}{" "}
    </li>
  </>
);

const Tab = ({ src, alt, content, title, id }) => (
  <div className="tab">
    <div className="img-wrapper">
      <img src={src} alt={alt} />
    </div>
    <div className="content">
      <h2>{title} </h2>

      <p>{content}</p>
      <button>More Info</button>
    </div>
  </div>
);
