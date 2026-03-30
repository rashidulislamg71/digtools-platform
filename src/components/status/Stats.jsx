import React from "react";

const SingleStat = ({ number, label }) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-2">
      <h2 className="text-xl sm:text-2xl text-white md:text-5xl font-bold">
        {number}
      </h2>
      <p className="text-gray-300">{label}</p>
    </div>
  );
};

function Stats() {
  return (
    <div className="bg-violet-600 p-4 md:py-10 md:px-20">
      <div className="flex justify-between items-center w-full gap-4">
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
