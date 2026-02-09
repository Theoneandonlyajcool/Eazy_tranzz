// import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
// import IntroPage from "@/Pages/IntroPage.tsx";
import LandingPage from "../Pages/LandingPage.tsx";
import SignIn from "../Pages/Auth/SignIn.tsx";
import SignUp from "../Pages/Auth/SignUp.tsx";
// import VerifyEmail from "../Pages/Auth/VerifyEmail.tsx";
import ForgetPassword from "../Pages/Auth/ForgetPassword.tsx";
import PageNotFound from "@/Pages/PageNotFound.tsx";
import AboutPage from "@/Pages/AboutPage.tsx";
import BlogPage from "@/Pages/BlogPage.tsx";
import ContactPage from "@/Pages/ContactPage.tsx";
import HomeLayout from "@/components/layout/HomeLayout.tsx";
import DashboardLayout from "@/Pages/userDashbord/DashBoardLayout.tsx";
import Overview from "@/components/DashboardComponent/Overview.tsx";
import Transaction from "@/components/DashboardComponent/Transaction.tsx";
import Payments from "@/components/DashboardComponent/Payments.tsx";
import Activities from "@/components/DashboardComponent/Activities.tsx";
import Rates from "@/components/DashboardComponent/Rates.tsx";
import Settings from "@/components/DashboardComponent/Settings.tsx";
import ProfilePic from "@/components/DashboardComponent/ProfilePic.tsx";
import Kyc from "@/components/DashboardComponent/Kyc.tsx";
import Support from "@/components/DashboardComponent/Support.tsx";
import VerifyEmail from "@/Pages/Auth/VerifyEmail.tsx";
import { Analytics } from "@vercel/analytics/next";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Analytics />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<HomeLayout />}>
          {/* <Route path="/" element={<IntroPage />} /> */}
          <Route path="" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="" element={<Overview />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="payments" element={<Payments />} />
          <Route path="activities" element={<Activities />} />
          <Route path="rates" element={<Rates />} />
          <Route path="profile" element={<ProfilePic />} />
          <Route path="settings" element={<Settings />} />
          <Route path="kyc" element={<Kyc />} />
          <Route path="support" element={<Support />} />
        </Route>
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/verify_email" element={<VerifyEmail />} />
        <Route path="/forgetPassowrd" element={<ForgetPassword />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
