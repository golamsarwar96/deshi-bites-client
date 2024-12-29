import { Helmet } from "react-helmet";
import Cover from "./shared/Cover";
import menuImg from "../assets/menu/banner3.jpg";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import saladImg from "../assets/menu/salad-bg.jpg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";
import useMenu from "../hooks/useMenu";
import SectionTitle from "../components/SectionTitle";
import MenuCategory from "./shared/MenuCategory";
const NavMenu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="space-y-16">
      <Helmet>
        <title>Deshi Bites | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* Today's Offer Section */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert Section */}
      <MenuCategory
        items={desserts}
        title="Desserts"
        coverImg={dessertImg}
      ></MenuCategory>
      {/* Pizza Section */}
      <MenuCategory
        items={pizzas}
        title="Pizza"
        coverImg={pizzaImg}
      ></MenuCategory>
      {/* salad Section */}
      <MenuCategory
        items={salads}
        title="Salads"
        coverImg={saladImg}
      ></MenuCategory>
      <MenuCategory
        items={soups}
        title="Soups"
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default NavMenu;
