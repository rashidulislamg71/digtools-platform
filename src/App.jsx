import React, { Suspense, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Stats from "./components/status/Stats";
import ProductsSectionTitle from "./components/ProductsSectionTitleAndBtn/ProductsSectionTitle";
import Products from "./components/Products/Products";
import GetStartSection from "./components/GetStartSection/GetStartSection";
import Pricing from "./components/Pricing/Pricing";
import WorkFlow from "./components/WorkFlowSection/WorkFlow";
import Footer from "./components/Footer/Footer";
import Banner from "./components/HeroBanner/Banner.jsx";
import Carts from "./components/Carts/Carts.jsx";

const productsData = async () => {
  try {
    const response = await fetch("/productsData.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products data:", error);
    return [];
  }
};

const pricingData = async () => {
  try {
    const res = await fetch("/pricingData.json");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching pricing data:", error);
    return [];
  }
};

const promiseProducts = productsData();
const promisePricing = pricingData();

function App() {
  const [active, setActive] = useState('products');
  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems)

  const addToCartHandle = (item) => {
    console.log(item)
    const data = [...cartItems, item];
    setCartItems(data);
  };

  return (
    <>
      <nav>
        <NavBar cartItems={cartItems} />
      </nav>
      <main>
        <section>
          <Banner />
        </section>
        <section>
          <Stats />
        </section>

        <section>
          <ProductsSectionTitle active={active} setActive={setActive} cartItems={cartItems} />
        </section>
        <section className="flex justify-center items-center">
          <Suspense
            fallback={
              <div className="py-20">
                <span className="loading loading-spinner loading-lg"> </span>

              </div>
            }
          >
            {active === "products" ? (
              <Products promiseProducts={promiseProducts} addToCartHandle={addToCartHandle} />
            ) : (
              <Carts />
            )}
          </Suspense>
        </section>

        <section>
          <GetStartSection />
        </section>

        <section>
          <Suspense
            fallback={<span className="loading loading-spinner loading-lg"></span>}
          >
            <Pricing promisePricing={promisePricing} />
          </Suspense>
        </section>

        <section>
          <WorkFlow />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
