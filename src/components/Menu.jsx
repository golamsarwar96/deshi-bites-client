import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuCard from "./MenuCard";
import useMenu from "../hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <div className="my-10">
      <SectionTitle
        subHeading="Check It Out"
        heading="From Our Menu"
      ></SectionTitle>
      <div className="grid grid-cols-2 justify-center items-center gap-5">
        {popular.map((menu) => (
          <MenuCard key={menu._id} menu={menu}></MenuCard>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button className="px-10 py-4 border-b-2 border-black hover:bg-yellow-400 hover:text-black">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Menu;
