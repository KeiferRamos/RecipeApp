import React, { useState, useEffect, createContext } from "react";
import { useContext } from "react";

const GlobalContext = createContext();

export const AppProvider = ({ App }) => {
  const [userForm, setUserForm] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [hasShow, setHasShow] = useState(false);
  const [label, setLabel] = useState("pinoy Recipe");
  const [newAcc, setNewAcc] = useState(true);
  const [hasAccount, setHasAccount] = useState(false);
  const [display, setDisplay] = useState(null);
  const [i, setI] = useState(0);

  const [users, setUsers] = useState(() => {
    let localData = localStorage.getItem("usersData");
    return localData ? JSON.parse(localData) : [];
  });

  const [activeUser, setActiveUser] = useState(() => {
    let localData = localStorage.getItem("activeUser");
    return localData ? JSON.parse(localData) : {};
  });

  useEffect(() => {
    localStorage.setItem("usersData", JSON.stringify(users));
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
  }, [activeUser, users]);

  useEffect(() => {
    setTimeout(() => {
      setLabel("pinoy recipe");
    }, 1000);
  }, [label]);

  return (
    <GlobalContext.Provider
      value={{
        users,
        setUsers,
        activeUser,
        setActiveUser,
        hasShow,
        setHasShow,
        newAcc,
        setNewAcc,
        label,
        setLabel,
        userForm,
        setUserForm,
        hasAccount,
        setHasAccount,
        display,
        setDisplay,
        i,
        setI,
      }}
    >
      {App}
    </GlobalContext.Provider>
  );
};

export const UseGlobalContext = () => useContext(GlobalContext);
