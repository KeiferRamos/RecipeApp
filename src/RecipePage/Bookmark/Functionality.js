import { UseGlobalContext } from "../../GlobalContext/GlobalContext";

const BookMarkfunctionality = () => {
  const { setUsers, users, activeUser } = UseGlobalContext();
  const currentUser = users.find((user) => user.id == activeUser.id);
  
  const SavedItem = (item) => {
    if (currentUser.bookmark.includes(item.name)) {
      const usersUnsaved = users.map((user) => {
        if (currentUser.id == user.id) {
          return {
            ...user,
            bookmark: user.bookmark.filter((saved) => saved !== item.name),
          };
        }
        return user;
      });
      setUsers(usersUnsaved);
    } else {
      const userSaved = users.map((user) => {
        if (currentUser.id == user.id) {
          return {
            ...user,
            bookmark: [...user.bookmark, item.name],
          };
        }
        return user;
      });
      setUsers(userSaved);
    }
  };

  return { SavedItem, currentUser };
};

export default BookMarkfunctionality;
