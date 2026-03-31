import React from "react";
import { FiCheck } from "react-icons/fi";

import { IoIosCheckmark } from "react-icons/io";



function ProductCart({ product, cartItems, addToCartHandle, productIcons }) {
  const { name, description, price, period, tag, tagType, features } = product;

  const matchedIcon = productIcons.find((item) => item.name === name);

  const Icon = matchedIcon?.icon;
  const iconColor = matchedIcon?.iconColor || "text-gray-500";

  const isAdded = cartItems.some(data => data.id === product.id);

  return (
    <div className="bg-white rounded-2xl  p-6 flex flex-col justify-between  shadow-lg shadow-gray-300">
      {/* Tag */}
      <div className="flex justify-end">
        <span
          className={`px-3 py-1 text-sm rounded-full mb-3 font-semibold 
          ${tagType === "popular"
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
          <li className="flex items-center gap-1" key={index}><IoIosCheckmark className="text-2xl text-green-500 font-bold" /> {feature}</li>
        ))}
      </ul>

      <button onClick={() => addToCartHandle(product)} disabled={isAdded}
        className={`mt-auto bg-linear-to-r  text-white py-2 rounded-lg cursor-pointer hover:to-violet-500
       hover:text-black duration-100 transition ${isAdded ? "from-green-500 to-green-400" : "from-violet-600 to-fuchsia-600"}`}
      >

        {isAdded ? (
          <span className="flex justify-center items-center gap-1">
            <FiCheck />
            Added to cart
          </span>
        ) : (
          "Buy Now"
        )}
      </button>
    </div>
  );
}

export default ProductCart;
