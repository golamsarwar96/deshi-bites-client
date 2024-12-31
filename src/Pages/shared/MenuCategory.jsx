import { Link } from "react-router-dom";
import MenuCard from "../../components/MenuCard";
import Cover from "./Cover";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid grid-cols-2 justify-center items-center gap-5 p-5 ">
        {items.map((menu) => (
          <MenuCard key={menu._id} menu={menu}></MenuCard>
        ))}
      </div>
      <Link to={`/order/${title}`} className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Now!
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
