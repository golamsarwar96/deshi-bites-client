import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";

const MainLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
