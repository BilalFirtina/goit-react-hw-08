import { lazy, Suspense } from "react";
import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import RestrictedRoute from "../RestrictedRoute";
import Registration from "../../pages/Registration/Registration";

const HomePage = lazy(() => import("../../pages/Home/Home"));
const Login = lazy(() => import("../../pages/Login/Login"));
const Contacts = lazy(() => import("../../pages/Contacts/Contacts"));
function App() {
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
                component={<Registration />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <RestrictedRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
