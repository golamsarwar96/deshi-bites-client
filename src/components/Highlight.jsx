import highlight from "../assets/home/chef-service.jpg";
const Highlight = () => {
  return (
    <div
      className="p-1 my-24 h-[570px] bg-no-repeat"
      style={{
        backgroundImage: `url(${highlight})`,
        backgroundColor: "lightgray",
      }}
    >
      <div className="w-[75%] mx-auto bg-white mt-24 text-center h-[60%]">
        <h1 className="pt-20 text-5xl">Deshi Bites</h1>
        <p className="w-[80%] mt-4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quam
          repellendus enim quas, pariatur, odio, voluptatem ipsa veniam sequi
          eos distinctio ab tempora culpa quae laborum totam placeat laboriosam
          reiciendis.
        </p>
      </div>
    </div>
  );
};

export default Highlight;
