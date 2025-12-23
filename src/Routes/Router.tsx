// import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage.tsx";
import SignIn from "../Pages/Auth/SignIn.tsx";
import SignUp from "../Pages/Auth/SignUp.tsx";
import VerifyEmail from "../Pages/Auth/VerifyEmail.tsx";
import ForgetPassword from "../Pages/Auth/ForgetPassword.tsx";
import PageNotFound from "@/Pages/PageNotFound.tsx";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/verify_email" element={<VerifyEmail />} />
        <Route path="/forgetPassowrd" element={<ForgetPassword />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
