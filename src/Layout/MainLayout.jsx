import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/shared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto font-inter">
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
