import featured from "../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div
      className="flex justify-center items-center gap-10 p-20 bg-fixed mb-24 bg-gradient-to-r from-slate-700 via-slate-400 to-slate-100"
      style={{ backgroundImage: `url(${featured})` }}
    >
      <div>
        <img className="w-[1200px]" src={featured} alt="" />
      </div>
      <div className="text-white bg-black opacity-70 p-5 space-y-1">
        <p className="text-white text-xl">March 20,2023</p>
        <h1 className="text-white text-2xl">Where I can get some?</h1>
        <p className="w-[90%] text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          cupiditate quas quasi odit? Eaque aspernatur ratione ducimus!
          Voluptatibus recusandae cupiditate, temporibus libero, quidem eos
          ullam molestiae facere possimus deserunt tenetur!
        </p>
      </div>
    </div>
  );
};

export default Featured;
