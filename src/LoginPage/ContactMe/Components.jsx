import "./styles.css";
import { items } from "../../MainApp/api";
import { useState } from "react";
import { UseGlobalContext } from "../../GlobalContext/GlobalContext";

const Contactform = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const { newAcc } = UseGlobalContext();
  return (
    <div className="icons" style={{ display: `${newAcc ? "block" : "none"}` }}>
      <p>contact me at:</p>
      <div className="icons-container">
        {items.map((item, index) => (
          <div key={index} onClick={() => setSelectedItem(index)}>
            {item.logo}
          </div>
        ))}
      </div>
      <div>
        {items.map((item, index) => (
          <p className={index == selectedItem ? "selected" : "unselected"}>
            {item.info}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Contactform;
