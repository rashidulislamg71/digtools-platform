import React, { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/HeroBanner/Banner";
import Stats from "./components/status/Stats";
import ProductsSectionTitle from "./components/ProductsSectionTitleAndBtn/ProductsSectionTitle";
import Products from "./components/Products/Products";
import GetStartSection from "./components/GetStartSection/GetStartSection";

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

function App() {
  const promiseProducts = productsData();
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <section>
          <Banner />
        </section>
        <section>
          <Stats />
        </section>

        <section>
          <ProductsSectionTitle />
        </section>
        <section>
          <Suspense
            fallback={<span className="loading loading-ring loading-lg"></span>}
          >
            <Products promiseProducts={promiseProducts} />
          </Suspense>
        </section>

        <section>
          <GetStartSection />
        </section>
      </main>
    </>
  );
}

export default App;
