import React, { useState, useEffect } from "react";
import "./home.css";
import { bgs } from "../MainApp/api";

export const Home = () => {
  let [position, setPosition] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPosition((prevVal) => (prevVal < bgs.length - 1 ? prevVal + 1 : 0));
    }, 2500);
    return;
  }, [position]);

  return (
    <div className="Home">
      {bgs.map((bg, index) => {
        return (
          <div
            className={`${index == position ? "show" : "hide"} background`}
            style={{ background: `url(${bg})` }}
          >
            <div className="blur"></div>
          </div>
        );
      })}
      <div className="intro-container">
        <div className="text">
          When we think of home, there's no denying that Filipino food is on his
          mind. Explore from our collection of Filipino favorites that will
          certainly make every Pinoy homesick for mom's home-cooked dishes.
        </div>
      </div>
    </div>
  );
};
