import React from "react";
import { UseGlobalContext } from "../GlobalContext/GlobalContext";
import AccountForm from "./AccountForm/AccountForm";
import LoginPageButtons from "./LoginPageButtons/Components";
import UserBookmark from "./UserBookmark/Components";
import "./main.css";

const Login = () => {
  const { activeUser, label } = UseGlobalContext();

  return (
    <div>
      <div className="know-more">
        <div className="blur"></div>
        <div className="container">
          <p>{label.toUpperCase()}</p>
          <AccountForm />
          <LoginPageButtons />
          {activeUser.user && <UserBookmark {...activeUser} />}
        </div>
      </div>
    </div>
  );
};

export default Login;
