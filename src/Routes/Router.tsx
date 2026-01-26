// import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
// import IntroPage from "@/Pages/IntroPage.tsx";
import LandingPage from "../Pages/LandingPage.tsx";
import SignIn from "../Pages/Auth/SignIn.tsx";
import SignUp from "../Pages/Auth/SignUp.tsx";
import VerifyEmail from "../Pages/Auth/VerifyEmail.tsx";
import ForgetPassword from "../Pages/Auth/ForgetPassword.tsx";
import PageNotFound from "@/Pages/PageNotFound.tsx";
import AboutPage from "@/Pages/AboutPage.tsx";
import BlogPage from "@/Pages/BlogPage.tsx";
import ContactPage from "@/Pages/ContactPage.tsx";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="/" element={<IntroPage />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/verify_email" element={<VerifyEmail />} />
        <Route path="/forgetPassowrd" element={<ForgetPassword />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
