import { Parallax } from "react-parallax";

const Cover = ({ img, title, paragraph }) => {
  return (
    <Parallax
      blur={{ min: -60, max: 60 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      {/* //Blur transition from min to max */}
      <div className="hero min-h-[720px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio et itaque tempora! Voluptate quis ducimus assumenda,
              impedit nostrum ipsam, tempora ipsa, perspiciatis officia fuga
              cupiditate quos quo modi asperiores dolor? s
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
