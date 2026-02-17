import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBox from "@/components/ChatBox";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ChatBox />
    </>
  );
};

export default HomeLayout;
