import UserBookmarkFunction from "./Functionality";
import { UseGlobalContext } from "../../GlobalContext/GlobalContext";
import "./style.css";

const UserBookmark = ({ user, email }) => {
  const { removeItem, items, navigate } = UserBookmarkFunction();
  const { userForm, setUserForm, setActiveUser, setI } = UseGlobalContext();
  return (
    <div className="login-modal">
      <div className="profile">
        <div>
          <img
            src={`https://avatars.dicebear.com/api/initials/${user}.svg?background=green`}
          />
          <div className="info">
            <p>{user}</p>
            <p>{email.length > 15 ? `${email.substring(0, 15)}...` : email}</p>
          </div>
          <button
            className="logout-btn"
            onClick={() => {
              setUserForm({ ...userForm, email: "", password: "" });
              setActiveUser({});
            }}
          >
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="bookmark-list">
        <p style={{ textAlign: "center", marginBottom: "2px", color: "#fff" }}>
          BookMark
        </p>
        {items.map((item) => {
          const { name, id, img } = item;
          return (
            <div>
              <img src={img[0]} />
              <div className="bookmark-item">
                <p>{name}</p>
                <div>
                  <button
                    onClick={() => {
                      navigate(`/recipe/${id}`);
                      setI(1);
                    }}
                  >
                    view recipe
                  </button>
                  <button onClick={() => removeItem(name)}>remove item</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserBookmark;
