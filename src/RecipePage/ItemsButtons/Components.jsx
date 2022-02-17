import React from "react";
import { UseGlobalContext } from "../../GlobalContext/GlobalContext";
import ItemsButtonsFunctionality from "./Functionality";
import "./styles.css";
import { FaThumbsUp, FaThumbsDown, FaCommentAlt } from "react-icons/fa";

const Buttons = ({ id, likes, disLikes, name }) => {
  const { setHasAccount, setDisplay } = UseGlobalContext();
  const {
    user,
    item,
    userlikes,
    userDislikes,
    updateLike,
    commentsCounts,
    updateDislike,
    updateCounts,
  } = ItemsButtonsFunctionality(id, likes, disLikes, name);

  return (
    <div className="like-btn">
      <button
        className={user && user.liked.includes(item.id) ? "liked" : "disliked"}
        onClick={() =>
          user
            ? updateCounts(
                user.liked,
                user.disLiked,
                "liked",
                "disLiked",
                updateDislike,
                updateLike
              )
            : setHasAccount(true)
        }
      >
        <div className="likes-container">
          <FaThumbsUp />
          <p>{userlikes}</p>
        </div>
      </button>
      <button
        className={
          user && user.disLiked.includes(item.id) ? "liked" : "disliked"
        }
        onClick={() =>
          user
            ? updateCounts(
                user.disLiked,
                user.liked,
                "disLiked",
                "liked",
                updateLike,
                updateDislike
              )
            : setHasAccount(true)
        }
      >
        <div className="likes-container">
          <FaThumbsDown />
          <p>{userDislikes}</p>
        </div>
      </button>
      <div className="comments-icon">
        <FaCommentAlt onClick={() => setDisplay(id)} />
        <p>{commentsCounts}</p>
      </div>
    </div>
  );
};

export default Buttons;
