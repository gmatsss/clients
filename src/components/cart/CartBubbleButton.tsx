// CartBubbleButton component

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext.tsx";
import CartItems from "./CartItems.tsx";
import "./CartBubbleButton.scss";

const CartBubbleButton = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { state } = useCart();

  const handleClick = () => {
    setIsCartVisible(!isCartVisible);
  };

  const totalItems = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const containerVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <>
      <button className="cart-bubble-button" onClick={handleClick}>
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        {isCartVisible ? "✖" : "🛒"}
      </button>
      <AnimatePresence>
        {isCartVisible && (
          <motion.div
            className="cart-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.1 }}
          >
            <CartItems setIsCartVisible={setIsCartVisible} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartBubbleButton;
