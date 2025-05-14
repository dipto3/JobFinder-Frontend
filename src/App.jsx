import { Route, Routes } from "react-router-dom";
import "./App.css";

import { useEffect } from "react";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import ProfilePage from "./components/pages/ProfilePage";
import RegisterPage from "./components/pages/RegisterPage";

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
        <Route element={<HomePage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<ProfilePage />} path="/me" />

        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </>
  );
}

export default App;
