import { useState } from "react";
import AllItem from "../../MainApp/api";

const mainIngredient = (item) => {
  return [...new Set(item.map((item) => item.mainIngredient))];
};
const Sort = (selectedItem) => {
  return selectedItem
    ? AllItem.filter((item) => item.mainIngredient == selectedItem)
    : AllItem;
};

const MainFunnctionality = () => {
  const [selected, setSelected] = useState("all");
  const [active, setActive] = useState(0);
  const [value, setValue] = useState("");
  const [showIngredients, setShowIngredients] = useState(false);
  const [ingredients, setIngredients] = useState(mainIngredient(AllItem));
  const [sort, setSort] = useState(true);
  const [sortedItems, setSortedItems] = useState(Sort());

  let Items = AllItem.filter(
    (item) =>
      item.name.substring(0, value.length).toLowerCase() == value.toLowerCase()
  );

  const CategorySort = (category, index) => {
    setActive(index);
    setSelected(category);
    setSortedItems(Sort());
    setIngredients(
      mainIngredient(
        category == "all"
          ? AllItem
          : AllItem.filter((item) => item.category == category)
      )
    );
  };

  const ingredientsSort = () => {
    setSort(!sort);
    setSortedItems(Sort());
    setValue("");
    setShowIngredients(!showIngredients);
  };

  const searchItem = () => {
    setShowIngredients(false);
    setSort(true);
  };

  return {
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
  };
};

export default MainFunnctionality;
