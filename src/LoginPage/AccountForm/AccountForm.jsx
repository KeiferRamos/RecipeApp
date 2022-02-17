import React from "react";
import UseForm from "../../CustomHooks/CustomHooks";
import { UsePasswordForm } from "../../CustomHooks/CustomHooks";
import { UseGlobalContext } from "../../GlobalContext/GlobalContext";
import "./styles.css";

const AccountForm = () => {
  const { newAcc } = UseGlobalContext();
  return (
    <div>
      {newAcc ? (
        <form>
          <UseForm input={"email"} />
          <UsePasswordForm />
        </form>
      ) : (
        <form>
          <UseForm input={"email"} />
          <UseForm input={"username"} />
          <UsePasswordForm />
        </form>
      )}
    </div>
  );
};

export default AccountForm;
