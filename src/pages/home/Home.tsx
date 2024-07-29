import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Client from "./components/Client.tsx";
import Product from "./components/Product.tsx";
import Whysection from "./components/Whysection.tsx";
import Heroarea from "./components/Heroarea.tsx";

import "./home.css";
import "./globals.css";
import "./responsive.css";

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <main>
      <Heroarea />
      <hr />
      <Whysection />
      <hr />
      <Product />

      <hr />
      <Client />
    </main>
  );
};

export default HomePage;
