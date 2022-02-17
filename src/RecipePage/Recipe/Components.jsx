import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AllItem from "../../MainApp/api";
import "./styles.css";

const Recipe = () => {
  const { id } = useParams();
  const [item, setItem] = useState(AllItem.find((item) => item.id == id));
  const nav = useNavigate();

  return (
    <div
      key={item.id}
      className="recipe-container"
      style={{
        background: `url(${item.img[0]})`,
      }}
    >
      <div className="blurred"></div>
      <div className="single-item-container">
        {item.img.map((img, index) => {
          return (
            <div className="recipe-img" key={index}>
              <img src={img} alt="" />
            </div>
          );
        })}
      </div>
      <div className="instruction">
        <div className="ingredients">
          <p>{"ingredients :".toUpperCase()}</p>
          <ul className="amount">
            {item.recipe.map((recipe, index) => {
              return <li key={index}>{`${recipe.amount} ${recipe.name}, `}</li>;
            })}
          </ul>
        </div>

        <div className="procedure">
          <p className="header">{"procedure :".toUpperCase()}</p>
          {item.procedure.map((item, index) => {
            return <p key={index}>{`${index + 1}. ${item}`}</p>;
          })}
          <button className="btn" onClick={() => nav("/about-page")}>
            {"back to menu".toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
