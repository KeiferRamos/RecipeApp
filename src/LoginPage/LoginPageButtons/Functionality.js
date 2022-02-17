import { UseGlobalContext } from "../../GlobalContext/GlobalContext";

const ButtonsFunctionality = () => {
  const {
    newAcc,
    setNewAcc,
    setHasShow,
    setUserForm,
    userForm,
    setLabel,
    users,
    setUsers,
    setActiveUser,
  } = UseGlobalContext();

  const Clear = () => {
    setNewAcc(true);
    setUserForm({ email: "", username: "", password: "" });
  };

  const LogIn = () => {
    if (!userForm.email && !userForm.password) {
      setLabel("invalid input");
    } else if (userForm.email && userForm.password) {
      const active = users.find(
        (user) => user.email == userForm.email && user.pass == userForm.password
      );
      if (active) {
        setActiveUser({
          user: active.user,
          id: active.id,
          email: active.email,
        });
      } else {
        setLabel("not recognized");
      }
    }
  };

  const Create = () => {
    if (!newAcc) {
      if (userForm.email && userForm.username && userForm.password) {
        const CheckAccount = users.find(
          (current) => current.email == userForm.email
        );
        if (!CheckAccount) {
          if (!userForm.email.endsWith("@gmail.com")) {
            setLabel("invalid email");
          } else if (userForm.password.length < 8) {
            setLabel("password is short");
          } else {
            setUsers([
              ...users,
              {
                id: Math.random(),
                email: userForm.email,
                user: userForm.username,
                pass: userForm.password,
                liked: [],
                disLiked: [],
                comments: [],
                bookmark: [],
              },
            ]);
            setUserForm({ email: "", username: "", password: "" });
            setHasShow(false);
            setNewAcc(true);
          }
        } else {
          setLabel("email already in use");
        }
      } else {
        return;
      }
    } else {
      setNewAcc(false);
      setUserForm({ email: "", username: "", password: "" });
      setHasShow(false);
    }
  };

  return { LogIn, Clear, Create };
};

export default ButtonsFunctionality;
