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

import {
  FaFileAlt,
  FaChartLine,
  FaCloud,
  FaPaintBrush,
  FaBullhorn,
  FaGraduationCap,
  FaCalendarAlt,
  FaGlobe,
  FaRobot
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";


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

const productIcons = [
  {
    id: 1,
    name: "Pro Resume Builder",
    icon: FaFileAlt,
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    name: "Premium Analytics Suite",
    icon: FaChartLine,
    iconColor: "text-green-500",
  },
  {
    id: 3,
    name: "Cloud Storage Pro",
    icon: FaCloud,
    iconColor: "text-sky-500",
  },
  {
    id: 4,
    name: "AI Design Tool",
    icon: FaPaintBrush,
    iconColor: "text-pink-500",
  },
  {
    id: 5,
    name: "Marketing Automation",
    icon: FaBullhorn,
    iconColor: "text-orange-500",
  },
  {
    id: 6,
    name: "E-learning Platform",
    icon: FaGraduationCap,
    iconColor: "text-purple-500",
  },
  {
    id: 7,
    name: "Social Media Scheduler",
    icon: FaCalendarAlt,
    iconColor: "text-indigo-500",
  },
  {
    id: 8,
    name: "Website Builder Pro",
    icon: FaGlobe,
    iconColor: "text-teal-500",
  },
  {
    id: 9,
    name: "AI Chat Assistant",
    icon: FaRobot,
    iconColor: "text-red-500",
  },
];

const promiseProducts = productsData();
const promisePricing = pricingData();

function App() {
  const [active, setActive] = useState('products');
  const [cartItems, setCartItems] = useState([]);

  const cartSum = cartItems.reduce((sum, item) => {
    return sum + item.price;
  }, 0)

  const addToCartHandle = (item) => {
    const checkUniqueItem = cartItems.some(data => data.id === item.id);
    if (checkUniqueItem) {
      alert("This item already in cart!");
      return;
    }
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    toast("Yes! Successfully Added To Cart!");
  };

  const removeItemFromCart = (item) => {
    const updatedCart = cartItems.filter(cart => cart.id !== item.id);
    setCartItems(updatedCart);
    toast("Oh No! Successfully Remove Item from Cart!");
  }

  const proceedToCheckout = () => {
    setCartItems([]);
    toast("Oh No! Successfully Remove All Cart Item!");
  }

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
              <Products promiseProducts={promiseProducts} addToCartHandle={addToCartHandle} productIcons={productIcons} cartItems={cartItems} />
            ) : (
              <Carts cartItems={cartItems} setCartItems={setCartItems} productIcons={productIcons} removeItemFromCart={removeItemFromCart} proceedToCheckout={proceedToCheckout} cartSum={cartSum} />
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

      <ToastContainer />
    </>
  );
}

export default App;
