import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { UseGlobalContext } from "../../GlobalContext/GlobalContext";

const NoAccountModal = () => {
  const navigate = useNavigate();
  const { setHasAccount, setDisplay, setI } = UseGlobalContext();
  return (
    <div className="app-container">
      <div className="create-acc">
        <p>To like, comment and bookmark your favorite Pinoy Recipe</p>
        <p>You need to Login your account first</p>
        <p>If you have no account then Create</p>
        <button onClick={() => setHasAccount(false)}>No, thanks</button>
        <button
          onClick={() => {
            navigate("/Login");
            setHasAccount(false);
            setDisplay(null);
            setI(2);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default NoAccountModal;
