import { lazy, Suspense, useEffect } from "react";
import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import RestrictedRoute from "../RestrictedRoute";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import PrivateRoute from "../PrivateRoute";

const HomePage = lazy(() => import("../../pages/Home/Home"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  if (isRefreshing) return <p>Refreshing user...</p>;
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={RegistrationPage}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={LoginPage} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={ContactsPage} />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
