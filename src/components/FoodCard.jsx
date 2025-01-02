import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const { name, price, image, _id } = item;
  const { user } = useAuth();
  const [, refetch] = useCart();
  const handleAddToCart = (food) => {
    console.log(food);
    if (user && user.email) {
      console.log(user.email, food);
      const cardItem = {
        menuId: _id,
        email: user?.email,
        name,
        price,
        image,
      };
      axiosSecure.post(`/carts`, cardItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          //To Update the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please Login to Add to Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
              <button
                onClick={() => handleAddToCart(item)}
                className="btn btn-outline border-0 border-b-4 bg-slate-100 text-yellow-600 border-yellow-600 mt-4"
              >
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
