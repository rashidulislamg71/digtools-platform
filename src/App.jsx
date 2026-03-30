import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/HeroBanner/Banner";

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
      </main>

    </>
  );
}

export default App;
