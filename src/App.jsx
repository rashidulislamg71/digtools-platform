import React, { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Stats from "./components/status/Stats";
import ProductsSectionTitle from "./components/ProductsSectionTitleAndBtn/ProductsSectionTitle";
import Products from "./components/Products/Products";
import GetStartSection from "./components/GetStartSection/GetStartSection";
import Pricing from "./components/Pricing/Pricing";
import WorkFlow from "./components/WorkFlowSection/WorkFlow";
import Footer from "./components/Footer/Footer";
import Banner from "./components/HeroBanner/Banner";

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

function App() {
  const promiseProducts = productsData();
  const promisePricing = pricingData();
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

        <section>
          <Suspense
            fallback={<span className="loading loading-ring loading-lg"></span>}
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
