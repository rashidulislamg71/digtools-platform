import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/HeroBanner/Banner";
import Stats from "./components/status/Stats";
import ProductsSectionTitle from "./components/ProductsSectionTitleAndBtn/ProductsSectionTitle";

function App() {
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
      </main>
    </>
  );
}

export default App;
