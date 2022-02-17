import { UseGlobalContext } from "../../GlobalContext/GlobalContext";
import { useState, useEffect } from "react";
import AllItem from "../../MainApp/api";

const ItemsButtonsFunctionality = (id, likes, disLikes, name) => {
  const { users, setUsers, activeUser } = UseGlobalContext();
  const [userlikes, setUserlikes] = useState(0);
  const [userDislikes, setUserDislikes] = useState(0);
  const [commentsCounts, setCommentsCounts] = useState(0);

  const item = AllItem.find((item) => item.id == id);
  const user = users.find((user) => user.id == activeUser.id);

  useEffect(() => {
    users.forEach((user) => {
      AllItem.forEach((item) => {
        user.comments &&
          user.comments.forEach((comment) => {
            if (comment.itemName == item.name) {
              item.comments.push(comment);
            }
          });
      });
    });
    AllItem.forEach((item) => {
      if (item.name == name) {
        setCommentsCounts([...new Set(item.comments)].length);
      }
    });
  }, [users]);

  const updateDislike = () => {
    AllItem.forEach((item) => {
      if (item.id == id) {
        item.disLikes.splice(item.disLikes.indexOf(user.id));
      }
    });
  };

  const updateLike = () => {
    AllItem.forEach((item) => {
      if (item.id == id) {
        item.likes.splice(item.likes.indexOf(user.id));
      }
    });
  };

  const updateCounts = (a, b, prop1, prop2, func1, func2) => {
    if (b.includes(item.id)) {
      const updated = users.map((currentUser) => {
        if (currentUser.id == user.id) {
          return {
            ...currentUser,
            [prop2]: b.filter((dislike) => dislike !== item.id),
            [prop1]: [...a, item.id],
          };
        } else {
          return currentUser;
        }
      });
      setUsers(updated);
      func1();
    } else if (a.includes(item.id)) {
      const updated = users.map((currentUser) => {
        if (currentUser.id == user.id) {
          return {
            ...currentUser,
            [prop1]: a.filter((like) => like !== item.id),
          };
        } else {
          return currentUser;
        }
      });
      setUsers(updated);
      func2();
    } else {
      const updated = users.map((currentUser) => {
        if (currentUser.id == user.id) {
          return {
            ...currentUser,
            [prop1]: [...a, item.id],
          };
        } else {
          return currentUser;
        }
      });
      setUsers(updated);
    }
  };

  useEffect(() => {
    AllItem.forEach((item) => {
      users.forEach((user) => {
        if (user.disLiked.includes(item.id)) {
          item.disLikes.push(user.id);
        }
        if (user.liked.includes(item.id)) {
          item.likes.push(user.id);
        }
      });
    });
    setUserlikes([...new Set(likes)].length);
    setUserDislikes([...new Set(disLikes)].length);
  }, [users]);

  return {
    item,
    user,
    userlikes,
    userDislikes,
    updateLike,
    commentsCounts,
    updateDislike,
    updateCounts,
  };
};

export default ItemsButtonsFunctionality;
