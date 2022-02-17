import { UseGlobalContext } from "../../GlobalContext/GlobalContext";
import AllItem, { items } from "../../MainApp/api";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";

const CommentsFunctionality = (selectedContent) => {
  const { activeUser, users, setUsers, setHasAccount } = UseGlobalContext();
  const currentUser = users.find((user) => user.id == activeUser.id);
  const selectedItem = AllItem.find((item) => item.id == selectedContent);
  const [hideComment, setHideComment] = useState(false);
  const [usercomments, setUserComments] = useState([]);
  const [text, setText] = useState("");

  const CheckComment = () => {
    if (currentUser && currentUser.id) {
      AddComment();
    } else {
      setHideComment(true);
      setHasAccount(true);
    }
  };

  const AddComment = () => {
    if (text) {
      const userAddcomment = users.map((user) => {
        if (user == currentUser) {
          return {
            ...user,
            comments: [
              ...user.comments,
              {
                id: Math.random(),
                itemName: selectedItem.name,
                usercomment: text,
                username: currentUser.user,
              },
            ],
          };
        } else return user;
      });
      setUsers(userAddcomment);
      setText("");
    }
  };

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
      if (item.name == selectedItem.name) {
        setUserComments([...new Set(item.comments)]);
      }
    });
  }, [users]);

  return {
    hideComment,
    selectedItem,
    CheckComment,
    text,
    setText,
    usercomments,
  };
};

export default CommentsFunctionality;
