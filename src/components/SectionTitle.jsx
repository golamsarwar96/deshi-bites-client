import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto mb-10 text-center">
      <p className="text-yellow-600 mb-3">--- {subHeading} ---</p>
      <h3 className="text-3xl uppercase border-y-4 border-zinc-300 py-4 font-semibold">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
