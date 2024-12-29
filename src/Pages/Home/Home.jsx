import CallUs from "../../components/CallUs";
import Highlight from "../../components/Highlight";
import Menu from "../../components/Menu";
import Recommend from "../../components/Recommend";
import Banner from "./Banner";
import CategorySlider from "./CategorySlider";
import Featured from "./Featured";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategorySlider></CategorySlider>
      <Highlight></Highlight>
      <Menu></Menu>
      <CallUs></CallUs>
      <Recommend></Recommend>
      <Featured></Featured>
    </div>
  );
};

export default Home;
