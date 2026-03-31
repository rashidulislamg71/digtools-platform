import { use } from "react";
import ProductCart from "./ProductCart";

function Products({ promiseProducts, addToCartHandle }) {
  const productsData = use(promiseProducts);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16 mb-15 mt-5">
      {productsData.length > 0 ? (
        productsData.map((product) => (
          <ProductCart key={product.id} product={product} addToCartHandle={addToCartHandle}/>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}

export default Products;
