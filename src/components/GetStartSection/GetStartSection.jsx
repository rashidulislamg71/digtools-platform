import React from "react";
import { AiFillProduct } from "react-icons/ai";

import { FaUserPlus, FaBoxOpen, FaRocket } from "react-icons/fa";

const getStartData = [
  {
    id: 1,
    title: "Create an Account",
    description:
      "Sign up free in seconds. NO credit card required to get started.",
    icon: FaUserPlus,
  },
  {
    id: 2,
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    icon: AiFillProduct,
  },
  {
    id: 3,
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: FaRocket,
  },
];

function GetStartSection() {
  return (
    <div className="bg-gray-100 py-8 md:py-16 md:px-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get Started in 3 Easy Steps
      </h2>
      <p className="text-gray-600 text-center mt-2 mb-8">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {getStartData.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-lg shadow-md p-8 text-center"
          >
            <div className="text-right">
              <span className="bg-violet-600 text-sm text-white py-2 px-2 font-bold rounded-full">
                0{step.id}
              </span>
            </div>
            <div className="mt-10 text-3xl text-violet-500 mb-4 bg-violet-100 p-3 rounded-full inline-block">
              <span>
                <step.icon />
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm mb-10">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetStartSection;
