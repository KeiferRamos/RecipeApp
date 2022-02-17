import { UseGlobalContext } from "../../GlobalContext/GlobalContext";
import { useEffect, useState } from "react";
import AllItem from "../../MainApp/api";
import { useNavigate } from "react-router-dom";

const UserBookmarkFunction = () => {
  const { setUsers, users, activeUser } = UseGlobalContext();

  const currentUser = users.find((user) => user.id == activeUser.id);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    currentUser.bookmark.forEach((saved) => {
      AllItem.forEach((item) => {
        saved == item.name && setItems((prevVal) => [...prevVal, item]);
      });
    });
  }, []);

  const removeItem = (name) => {
    const updateBookmark = users.map((user) => {
      if (user == currentUser) {
        return {
          ...user,
          bookmark: user.bookmark.filter((item) => item !== name),
        };
      } else {
        return user;
      }
    });
    setUsers(updateBookmark);
    setItems(items.filter((items) => items.name !== name));
  };

  return { removeItem, items, navigate };
};

export default UserBookmarkFunction;
