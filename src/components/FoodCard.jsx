const FoodCard = ({ item }) => {
  const { name, price, image } = item;
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-6 justify-center ">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="object-cover" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p className="absolute right-6 top-6 px-4 py-2 bg-black text-white ">
              {price}
            </p>
            <h2 className="text-3xl font-bold text-center">{name}</h2>
            <p className="text-center">
              Lettuce, egg, Permasan Cheese, Chicken, Breast fillet
            </p>
            <div className="flex justify-center">
              <button className="btn btn-outline border-0 border-b-4 bg-slate-100 text-yellow-600 border-yellow-600 mt-4">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
