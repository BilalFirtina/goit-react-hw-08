import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <div></div>
      <div>Phonebook</div>
      <Navigation />
      <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </header>
  );
};

export default AppBar;
