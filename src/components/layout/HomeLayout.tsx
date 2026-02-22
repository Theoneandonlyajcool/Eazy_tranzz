import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBox from "@/components/ChatBox";
import ScrollToTop from "@/components/ScrollToTop";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ChatBox />
      <ScrollToTop />
    </>
  );
};

export default HomeLayout;
