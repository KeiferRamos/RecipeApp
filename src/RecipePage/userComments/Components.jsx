import { UseGlobalContext } from "../../GlobalContext/GlobalContext";
import CommentsFunctionality from "./Functionality";
import { FaTimes, FaPaperPlane } from "react-icons/fa";
import "./styles.css";

const Comments = ({ selectedContent }) => {
  const { activeUser, setDisplay } = UseGlobalContext();
  const {
    hideComment,
    selectedItem,
    CheckComment,
    text,
    setText,
    usercomments,
  } = CommentsFunctionality(selectedContent);

  return (
    <div
      className="app-container"
      style={{ zIndex: `${hideComment ? "999" : "1000"}` }}
    >
      <div className="main-container">
        <section className="close-tab">
          <span>{selectedItem.name}</span> &nbsp;
          <FaTimes onClick={() => setDisplay(null)} />
        </section>
        <div className="comments-container">
          {usercomments.length !== 0 ? (
            <CommentsContainer items={usercomments} />
          ) : (
            <div className="no-comments">
              <p>no comments yet</p>
            </div>
          )}
        </div>
        <form className="comments-generator">
          <img
            src={`https://avatars.dicebear.com/api/initials/${activeUser.user}.svg?`}
          />
          <div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="comment here..."
            />
            <FaPaperPlane onClick={() => CheckComment()} />
          </div>
        </form>
      </div>
    </div>
  );
};

const CommentsContainer = ({ items }) => {
  const { activeUser } = UseGlobalContext();
  return (
    <div>
      {items.map((item) => {
        const { username, usercomment, id } = item;
        return (
          <div className="user-comments">
            <img
              src={`https://avatars.dicebear.com/api/initials/${username}.svg?`}
            />
            <div className="username-and-comments">
              <h3>{username}</h3>
              <div className="comment">
                <p>{usercomment}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
