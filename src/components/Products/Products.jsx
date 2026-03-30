import { use } from "react";
import ProductCart from "./ProductCart";

function Products({ promiseProducts }) {
  const productsData = use(promiseProducts);

  return (
    <div>
      {productsData.length > 0 ? (
        productsData.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}

export default Products;
