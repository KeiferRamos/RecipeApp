import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Url } from "../MainApp/api";
import { FaHamburger } from "react-icons/fa";
import { UseGlobalContext } from "../GlobalContext/GlobalContext";

export const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [value, setValue] = useState(0);
  const { i, setI } = UseGlobalContext();

  const Resize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", Resize);
    return () => window.removeEventListener("resize", () => Resize);
  }, [value]);

  return (
    <div className="nav-bar">
      <div className="logo">
        <p>Pinoy Recipe</p>
      </div>
      <ul className="nav-links">
        {Url.map((item, index) => {
          return (
            <Link
              key={index}
              className={`${i == index ? "active" : ""} links`}
              to={item.links}
              onClick={() => setI(index)}
            >
              {width <= 700 ? item.logo : item.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
