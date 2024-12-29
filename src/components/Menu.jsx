import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuCard from "./MenuCard";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenus(popularItems);
        console.log(popularItems);
      });
  }, []);
  return (
    <div className="my-10">
      <SectionTitle
        subHeading="Check It Out"
        heading="From Our Menu"
      ></SectionTitle>
      <div className="grid grid-cols-2 justify-center items-center gap-7">
        {menus.map((menu) => (
          <MenuCard key={menu._id} menu={menu}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default Menu;
