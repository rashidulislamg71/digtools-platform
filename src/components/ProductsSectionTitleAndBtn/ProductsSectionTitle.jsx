import React from "react";
import ProductsBtn from "../ProductsBtn/ProductsBtn";

function ProductsSectionTitle( {active, setActive, cartItems }) {
  return (
    <div>
      <div className="flex flex-col gap-4 md:gap-5 items-center justify-center py-5 px-5 text-center bg-white">
        <h2 className="font-bold text-3xl md:text-lime-4xl ">
          Premium Digital Tools
        </h2>
        <p className="text-sm text-gray-500 max-w-115">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <ProductsBtn active ={active} setActive = {setActive} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default ProductsSectionTitle;
