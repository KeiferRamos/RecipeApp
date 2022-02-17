import React from "react";
import ButtonsFunctionality from "./Functionality";
import { UseGlobalContext } from "../../GlobalContext/GlobalContext";
import "./styles.css";
import Contactform from "../ContactMe/Components";

const LoginPageButtons = () => {
  const { LogIn, Create, Clear } = ButtonsFunctionality();
  const { newAcc, setHasShow, setUserForm } = UseGlobalContext();

  return (
    <div className="LoginPageButtons">
      <button
        style={{ display: `${!newAcc ? "none" : "inline"}` }}
        className="submit-btn"
        onClick={() => LogIn()}
      >
        login
      </button>
      <button
        style={{ display: `${newAcc ? "none" : "inline"}` }}
        className="refresh-btn"
        onClick={() => {
          setHasShow(false);
          Clear();
        }}
      >
        <i class="fas fa-arrow-left"></i>
      </button>
      <button className="create-btn" onClick={() => Create()}>
        register
      </button>
      <button
        className="refresh-btn"
        onClick={() => {
          setUserForm({ email: "", username: "", password: "" });
        }}
      >
        <i class="fas fa-undo-alt"></i>
      </button>
      <br />
      <Contactform />
    </div>
  );
};

export default LoginPageButtons;
