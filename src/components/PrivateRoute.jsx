import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selector";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  // Eğer giriş yapılmamış ve refresh işlemi de bitmişse -> yönlendir
  if (!isLoggedIn && !isRefreshing) {
    return <Navigate to={redirectTo} />;
  }

  // Aksi durumda component'i göster
  return <Component />;
};

export default PrivateRoute;
