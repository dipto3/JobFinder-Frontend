import { Route, Routes } from "react-router-dom";
import "./App.css";

import { useEffect } from "react";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import ProfilePage from "./components/pages/ProfilePage";
import RegisterPage from "./components/pages/RegisterPage";
import Layout from "./components/partials/Layout";
import PrivateRoutes from "./routes/PrivateRoutes";
function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/script.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={<PrivateRoutes />}>
            <Route element={<ProfilePage />} path="me" />
          </Route>
        </Route>

        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />

        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </>
  );
}

export default App;
