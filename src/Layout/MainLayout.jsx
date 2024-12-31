import { Outlet, useLocation } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/shared/Footer";
import Navbar from "../Pages/shared/Navbar";

const MainLayout = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <div className="max-w-screen-xl mx-auto font-inter">
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
