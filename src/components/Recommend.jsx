import SectionTitle from "./SectionTitle";
import slide1 from "../assets/home/slide1.jpg";
const Recommend = () => {
  return (
    <div className="mb-10">
      <SectionTitle
        subHeading="Should Try"
        heading="Chef Recommends"
      ></SectionTitle>
      <div className="flex flex-col md:flex-row gap-6 justify-center ">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="object-cover" src={slide1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center">Caeser Salad</h2>
            <p className="text-center">
              Lettuce, egg, Permasan Cheese, Chicken, Breast fillet
            </p>
            <div className="flex justify-center">
              <button className="btn bg-footColor1 text-white">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="object-cover" src={slide1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center">Caeser Salad</h2>
            <p className="text-center">
              Lettuce, egg, Permasan Cheese, Chicken, Breast fillet
            </p>
            <div className="flex justify-center">
              <button className="btn bg-footColor1 text-white">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="object-cover" src={slide1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center">Caeser Salad</h2>
            <p className="text-center">
              Lettuce, egg, Permasan Cheese, Chicken, Breast fillet
            </p>
            <div className="flex justify-center">
              <button className="btn bg-footColor1 text-white">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
