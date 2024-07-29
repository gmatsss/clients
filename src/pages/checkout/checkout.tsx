import React, { useEffect } from "react";
import "./Checkout.scss";
import Customerinfo from "./components/Customerinfo.tsx";
import { useCart } from "../../context/CartContext.tsx";

const Checkout: React.FC = () => {
  const { state } = useCart();

  const handleFormSubmit = (formData: any) => {
    console.log("Cart Items:", state.items);
    console.log("Form Data:", formData);
  };

  return (
    <div className="checkout-container">
      <Customerinfo onSubmit={handleFormSubmit} />
      <div className="product-info">
        <h2>Product Information</h2>
        <div className="scroll-container">
          {state.items.map((item, index) => (
            <div key={index} className="product-card">
              <div className="card-header">
                <h3>{item.name}</h3>
              </div>
              <div className="card-body">
                <img
                  src={item.ImageSrc || "path/to/default/image.png"}
                  alt={item.name}
                  className="product-image"
                />
                <div className="details">
                  <p>
                    <strong>Size:</strong> {item.size}
                  </p>
                  <p>
                    <strong>Color:</strong> {item.color}
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
