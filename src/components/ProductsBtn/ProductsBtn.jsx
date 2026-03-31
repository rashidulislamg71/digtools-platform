import React from "react";

function ProductsBtn({ active, setActive, cartItems }) {

  const btnActiveStyles = `bg-linear-to-r from-violet-600 to-fuchsia-400 text-white rounded-full py-1 px-3 `;
  const btnCommonStyles = `text-black cursor-pointer font-semibold transition duration-300 hover:text-violet-500  `

  return (
    <div className="flex gap-2 border rounded-full border-violet-600  ">
      <button onClick={() => setActive("products")} className={`px-3 font-bold ${active === "products" ? btnActiveStyles : btnCommonStyles}`}>
        Products
      </button>
      <button onClick={() => setActive("cart")} className={`px-3 font-bold ${active === "cart" ? btnActiveStyles : btnCommonStyles}`}>
        Cart {cartItems.length === 0 ? "" : `(${cartItems.length})`}
      </button>
    </div>
  );
}

export default ProductsBtn;
