import React from "react";
import LivePulse from "../../utils/LivePulse.jsx";
import Button from "../../utils/Button.jsx";
import banner from "../../assets/banner.png";
import { FaPlay } from "react-icons/fa";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-8 lg:px-16 py-12 ">
      {/* banner content left side  */}
      <div className="flex flex-col gap-4 max-w-110">
        <div
          className=" flex justify-center items-center gap-2 py-1 px-3 bg-violet-300 rounded-2xl text-purple-700
         w-fit mb-4"
        >
          <LivePulse /> <span>New: AI-Powered Tools Available</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-16">
          Supercharge Your <span className="bg-linear-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
            Digital Workflow
          </span>
        </h1>
        <p className="text-sm text-gray-600 max-w-md">
          Access premium AI tools, design assets, templates, and productivity software-all in
          one place. Start creating faster today. Explore Products.
        </p>
        <div className="flex gap-4 items-center mt-5">
          <Button text={"Explore Products"} />
          <button className=" bg-linear-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text flex gap-1 items-center border border-violet-500 hover:-translate-y-1 duration-300 transition-all cursor-pointer py-1 px-2 rounded-3xl">
            <FaPlay className="text-violet-500 font-bold" /> Watch Demo
          </button>
        </div>
      </div>
      {/* banner content right side */}
      <div className="max-w-lg">
        <img className="w-full" src={banner} alt="Banner " />
      </div>
    </div>
  );
}

export default Banner;
