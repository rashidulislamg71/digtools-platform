import React from "react";

import {
  FaFileAlt,
  FaChartLine,
  FaCloud,
  FaPaintBrush,
  FaBullhorn,
  FaGraduationCap,
  FaCalendarAlt,
  FaGlobe,
  FaRobot,
  FaFileArchive,
  FaFileAudio,
} from "react-icons/fa";
import { FaFile } from "react-icons/fa6";

const productIcons = [
  {
    id: 1,
    name: "Pro Resume Builder",
    icon: FaFileAlt,
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    name: "Premium Analytics Suite",
    icon: FaChartLine,
    iconColor: "text-green-500",
  },
  {
    id: 3,
    name: "Cloud Storage Pro",
    icon: FaCloud,
    iconColor: "text-sky-500",
  },
  {
    id: 4,
    name: "AI Design Tool",
    icon: FaPaintBrush,
    iconColor: "text-pink-500",
  },
  {
    id: 5,
    name: "Marketing Automation",
    icon: FaBullhorn,
    iconColor: "text-orange-500",
  },
  {
    id: 6,
    name: "E-learning Platform",
    icon: FaGraduationCap,
    iconColor: "text-purple-500",
  },
  {
    id: 7,
    name: "Social Media Scheduler",
    icon: FaCalendarAlt,
    iconColor: "text-indigo-500",
  },
  {
    id: 8,
    name: "Website Builder Pro",
    icon: FaGlobe,
    iconColor: "text-teal-500",
  },
  {
    id: 9,
    name: "AI Chat Assistant",
    icon: FaRobot,
    iconColor: "text-red-500",
  },
];

function ProductCart({ product }) {
  const { name, description, price, period, tag, tagType, features } = product;

  const matchedIcon = productIcons.find((item) => item.name === name);

  const Icon = matchedIcon?.icon;
  const iconColor = matchedIcon?.iconColor || "text-gray-500";

  return (
    <div className="bg-white rounded-2xl  p-6 flex flex-col justify-between  shadow-lg shadow-gray-300">
      {/* Tag */}
      <div className="flex justify-end">
        <span
          className={`px-3 py-1 text-sm rounded-full mb-3 font-semibold 
          ${
            tagType === "popular"
              ? "bg-blue-100 text-blue-600"
              : tagType === "new"
                ? "bg-green-100 text-green-600"
                : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {tag}
        </span>
      </div>

      {/* Icon */}
      <div className="mb-3 -mt-3 border-2 border-gray-200 rounded-full w-12 h-12 flex justify-center items-center p-2">
        {Icon && <Icon className={`text-4xl ${iconColor}`} />}
      </div>

      <h2 className="text-xl font-bold mb-3">{name}</h2>

      <p className="text-gray-600 mb-4">{description}</p>

      <h3 className="text-2xl font-bold mb-2">
        ${price}
        <span className="text-sm text-gray-500"> / {period}</span>
      </h3>

      <ul className="mb-5 space-y-1 text-sm text-gray-700">
        {features.map((feature, index) => (
          <li key={index}>✔ {feature}</li>
        ))}
      </ul>

      <button
        className="mt-auto bg-linear-to-r from-violet-600 to-fuchsia-600 text-white py-2 rounded-lg cursor-pointer hover:to-violet-500
       hover:text-black duration-100 transition"
      >
        Buy Now
      </button>
    </div>
  );
}

export default ProductCart;
