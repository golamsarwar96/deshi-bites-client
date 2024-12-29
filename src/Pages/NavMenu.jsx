import { Helmet } from "react-helmet";
import Cover from "./shared/Cover";
import menuImg from "../assets/menu/banner3.jpg";
import Menu from "../components/Menu";
const NavMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Deshi Bites | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <Menu></Menu>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <Menu></Menu>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <Menu></Menu>
    </div>
  );
};

export default NavMenu;
