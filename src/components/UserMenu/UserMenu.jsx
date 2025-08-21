import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <span>{user?.name || user?.email}</span>
      <button onClick={() => dispatch(logout())}>Log out</button>
    </div>
  );
};

export default UserMenu;
