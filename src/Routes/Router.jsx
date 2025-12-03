// import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import SignIn from "../Pages/SignIn.tsx";
import SignUp from "../Pages/SignUp.tsx";

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
