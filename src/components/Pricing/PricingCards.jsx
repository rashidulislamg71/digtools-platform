import React from "react";

function PricingCards({ pricingItem }) {
  const { name, description, price, period, tag, tagType, features } =
    pricingItem;

  return (
    <div
      className={`relative rounded-2xl p-6 shadow-lg flex flex-col justify-between transition
      ${tagType === "popular" ? "bg-linear-to-t from-violet-500 to-fuchsia-500 text-white" : "bg-gray-100"}`}
    >
      {/* Tag (Top Badge) */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span
          className={`px-4 py-1 text-xs rounded-full font-semibold shadow
          ${
            tagType === "popular"
              ? "bg-green-500 text-white"
              : tagType === "new"
                ? "bg-violet-500 text-white"
                : "bg-yellow-400 text-black"
          }`}
        >
          {tag}
        </span>
      </div>

      {/* Title */}
      <div className="text-center mb-4 mt-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p
          className={`text-sm mt-1 ${
            tagType === "popular" ? "text-white/80" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="text-center mb-6">
        <h3 className="text-4xl font-extrabold">${price.toFixed(2)}</h3>
        <p
          className={`text-sm ${
            tagType === "popular" ? "text-white/80" : "text-gray-500"
          }`}
        >
          /{period}
        </p>
      </div>

      {/* Features */}
      <ul
        className={`space-y-2 mb-6 text-sm ${
          tagType === "popular" ? "text-white/90" : "text-gray-700"
        }`}
      >
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            ✔ <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className={`mt-auto py-2 rounded-full font-semibold transition cursor-pointer
        ${
          tagType === "popular"
            ? "bg-white text-violet-600 hover:bg-fuchsia-500 hover:text-white"
            : "bg-linear-to-r from-violet-600 to-fuchsia-600 text-white hover:from-fuchsia-600"
        }`}
      >
        Buy Now
      </button>
    </div>
  );
}

export default PricingCards;
