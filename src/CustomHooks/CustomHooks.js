import { FaEyeSlash, FaEye } from "react-icons/fa";
import { UseGlobalContext } from "../GlobalContext/GlobalContext";

const UseForm = ({ input }) => {
  const { userForm, setUserForm } = UseGlobalContext();
  return (
    <div>
      <input
        className="form"
        type="text"
        value={userForm[input]}
        onChange={(e) => setUserForm({ ...userForm, [input]: e.target.value })}
      />
      <p className="label">{input}</p>
    </div>
  );
};

export const UsePasswordForm = () => {
  const { userForm, setUserForm, setHasShow, hasShow } = UseGlobalContext();
  return (
    <div className="login-password">
      <input
        className="password"
        type={hasShow ? "text" : "password"}
        value={userForm.password}
        onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
      />
      <span
        className="show-pass"
        style={{ color: "green" }}
        onClick={() => setHasShow(!hasShow)}
      >
        {hasShow ? <FaEye /> : <FaEyeSlash />}
      </span>
      <p className="label">password</p>
    </div>
  );
};

export default UseForm;
