import React from "react";
import Item from "../Items/Components";
import "./styles.css";
import NoAccountModal from "../NoAccountModal/NoAccountModal";
import Comments from "../userComments/Components";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { UseGlobalContext } from "../../GlobalContext/GlobalContext";
import MainFunnctionality from "./Functionality";
import AllItem from "../../MainApp/api";
import { FaUtensilSpoon } from "react-icons/fa";

const categories = ["all", ...new Set(AllItem.map((item) => item.category))];

const MainContent = () => {
  const { hasAccount, display } = UseGlobalContext();
  const {
    selected,
    active,
    ingredients,
    sortedItems,
    Items,
    CategorySort,
    ingredientsSort,
    searchItem,
    value,
    setValue,
    showIngredients,
    setSortedItems,
    Sort,
    sort,
  } = MainFunnctionality();

  return (
    <div className="Items-container">
      <div className="btns">
        <form className="search-box">
          <input
            type="text"
            placeholder="search here"
            value={value}
            onClick={() => searchItem()}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        {categories.map((category, index) => {
          return (
            <button
              className={index == active ? "active" : ""}
              key={index}
              onClick={() => CategorySort(category, index)}
            >
              {category.toUpperCase()}
            </button>
          );
        })}
        <div style={{ position: "relative" }}>
          <button className="sorted-list">
            <i className="fas fa-utensils"></i>
            <span onClick={() => ingredientsSort()}>
              {showIngredients ? <FaCaretUp /> : <FaCaretDown />}
            </span>
          </button>
          <div className={`${showIngredients ? "slctd-ing" : "unslctd-ing"}`}>
            {ingredients.map((ingredient) => {
              return (
                <button onClick={() => setSortedItems(Sort(ingredient))}>
                  {ingredient}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="content">
        {(sort ? Items : sortedItems).map((item) => {
          return <Item item={item} key={item.id} selected={selected} />;
        })}
      </div>
      {hasAccount && <NoAccountModal />}
      {display && <Comments selectedContent={display} />}
    </div>
  );
};

export default MainContent;
