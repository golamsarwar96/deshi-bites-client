const MenuCard = ({ menu }) => {
  const { name, category, price, image, recipe } = menu;
  return (
    <div className="flex justify-center items-center gap-3">
      <div>
        <img
          className="w-32 h-24 rounded-r-full rounded-b-full"
          src={image}
          alt=""
        />
      </div>
      <div className="space-y-1">
        <div className="text-xl">{name}</div>
        <div className="text-sm">{recipe}</div>
      </div>
      <div className="text-yellow-500">{price}</div>
    </div>
  );
};

export default MenuCard;
