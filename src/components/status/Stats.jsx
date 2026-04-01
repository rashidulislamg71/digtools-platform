import React from "react";

const SingleStat = ({ number, label }) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-1">
      <h2 className="text-xl sm:text-2xl text-white md:text-5xl font-bold">
        {number}
      </h2>
      <p className="text-gray-300 text-sm md:text-base">{label}</p>
    </div>
  );
};

function Stats() {
  return (
    <div className="bg-linear-to-r from-violet-600 to-fuchsia-600 py-4 md:py-10 md:px-20 mb-10 md:mb-20">
      <div className="flex justify-between items-center w-full gap-2">
        {/* First Stat */}
        <SingleStat number="50K+" label="Active Users" />

        {/* Divider */}
        <div className="border-l-2 border-gray-300 h-16 hidden md:block"></div>

        {/* Second Stat */}
        <SingleStat number="200+" label="Premium Tools" />

        {/* Divider */}
        <div className="border-l-2 border-gray-300 h-16 hidden md:block"></div>

        {/* Third Stat */}
        <SingleStat number="4.9" label=" Rating" />
      </div>
    </div>
  );
}

export default Stats;
