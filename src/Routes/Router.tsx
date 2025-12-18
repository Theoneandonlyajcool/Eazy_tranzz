// import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage.tsx";
import SignIn from "../Pages/Auth/SignIn.tsx";
import SignUp from "../Pages/Auth/SignUp.tsx";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
