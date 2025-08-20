import { lazy, Suspense } from "react";
import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/Home/Home"));
function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
