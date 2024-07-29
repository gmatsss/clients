import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header.tsx";
import HomePage from "./pages/home/Home.tsx";
import ProductPage from "./pages/product/product.tsx";
import SingleProductPage from "./pages/SingleProd/SingleProd.tsx";
import CartBubbleButton from "./components/cart/CartBubbleButton.tsx"; // Import the CartBubbleButton
import Footer from "./pages/home/components/footer.jsx";
import Checkout from "./pages/checkout/checkout.tsx";
import Blog from "./pages/blog/blog.tsx";
import About from "./pages/about/about.tsx";

const App: React.FC = () => {
  const HideCartButtonOnRoutes = () => {
    const location = useLocation();
    const shouldHideCartButton = location.pathname === "/checkout";

    return <>{!shouldHideCartButton && <CartBubbleButton />}</>;
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/singleproduct/:id" element={<SingleProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <HideCartButtonOnRoutes />
      <Footer />
    </div>
  );
};

export default App;
