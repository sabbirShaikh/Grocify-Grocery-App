import React from "react";

function Headings({ highlight, heading }) {
  return (
    <div className="mx-auto w-fit">
      <h2 className="md:text-5xl text-4xl font-bold">
        <span className="text-orange-500">{highlight}</span> {heading}
      </h2>
      <div className="w-35 md:mt-6 mt-4 rounded-2xl ml-auto h-1 bg-orange-500"></div>
    </div>
  );
}

export default Headings;
