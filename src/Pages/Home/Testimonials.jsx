import SectionTitle from "../../components/SectionTitle";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading="What Our Clients Say"
        heading="TESTIMONIALS"
      ></SectionTitle>
      <div className="w-[80%] mx-auto">
        <ReactStars
          count={5}
          onChange={Testimonials}
          size={48}
          activeColor="#ffd700"
        />
      </div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <div className="flex justify-center items-center ">
          {reviews.map((review) => (
            <SwiperSlide className="" key={review._id}>
              <p className="text-center w-[80%] mx-auto">{review.details}</p>
              <p className="text-center w-[80%] mx-auto mb-32">{review.name}</p>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
