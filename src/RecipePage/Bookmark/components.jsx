import { UseGlobalContext } from "../../GlobalContext/GlobalContext";
import BookMarkfunctionality from "./Functionality";
import "./styles.css";
import { FaBookmark } from "react-icons/fa";

const BookMark = ({ item }) => {
  const { SavedItem, currentUser } = BookMarkfunctionality(item);
  const { setHasAccount } = UseGlobalContext();
  return (
    <button
      className={`${
        currentUser && currentUser.bookmark.includes(item.name)
          ? "marked"
          : "unmarked"
      } bookmark-button`}
      onClick={() => (currentUser ? SavedItem(item) : setHasAccount(true))}
    >
      <FaBookmark />
    </button>
  );
};

export default BookMark;
