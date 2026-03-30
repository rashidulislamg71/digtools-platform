import React from "react";

function ProductsBtn() {
  return (
    <div className="flex gap-3">
      <button className="bg-linear-to-r from-violet-600
       to-fuchsia-400 rounded-3xl text-white py-1 px-3 cursor-pointer font-semibold">
        Products
      </button>
      <button className="bg-linear-to-r from-violet-500
       to-fuchsia-400 rounded-3xl text-white py-1 px-3 cursor-pointer font-semibold">
        Cart 0
      </button>
    </div>
  );
}

export default ProductsBtn;
