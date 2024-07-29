// CartItems component

import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext.tsx";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  ImageSrc: string;
  size: string;
  color: string;
}

const CartItems: React.FC<{ setIsCartVisible: (visible: boolean) => void }> = ({
  setIsCartVisible,
}) => {
  const navigate = useNavigate();
  const { state, removeItem, decreaseItemQuantity } = useCart();

  const handleCheckout = () => {
    setIsCartVisible(false); // Close the cart
    navigate("/checkout"); // Navigate to checkout
  };

  return (
    <div className="cart-items-container">
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {state.items.map((item: CartItem, index: number) => (
            <div key={index} className="cart-item">
              <img
                src={item.ImageSrc}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p>{`Size: ${item.size}, Color: ${item.color}`}</p>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                {item.quantity > 1 && (
                  <button
                    onClick={() => decreaseItemQuantity(item.id)}
                    className="change-quantity-button"
                  >
                    -
                  </button>
                )}
                <button
                  onClick={() => removeItem(item.id)}
                  className="remove-item-button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartItems;
