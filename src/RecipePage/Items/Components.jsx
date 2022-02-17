import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Buttons from "../ItemsButtons/Components";
import BookMark from "../Bookmark/components";

function Item({ item, selected }) {
  const { img, name, id, info, category } = item;
  const [readMore, setReadMore] = useState(false);

  return (
    <div
      className={`${
        selected == "all" || category == selected ? "show" : "hide"
      }-item`}
      key={id}
    >
      <div className="img-container">
        <img src={img[0]} />
      </div>
      <div className="text-container">
        <div className="title">
          <p>{name}</p>
          <BookMark item={item} />
        </div>
        <p className="info">
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <div className="others">
          <Link className="view-btn" to={`/recipe/${id}`}>
            view Recipe
          </Link>
          <Buttons {...item} />
        </div>
      </div>
    </div>
  );
}

export default Item;
