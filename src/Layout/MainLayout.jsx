import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/shared/Footer";
import Navbar from "../Pages/shared/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto font-inter">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
