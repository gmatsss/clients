import React, { createContext, useContext, useReducer } from "react";

// Define the type for the cart item
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  ImageSrc: string;
  size: string; // Added size
  color: string; // Added color
}

// Define the type for the initial state
interface CartState {
  items: CartItem[];
}

// Define the type for the context value
interface CartContextType {
  state: CartState;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
}

// Create the cart context with an empty initial value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Action types for the reducer
enum ActionType {
  AddItem,
  RemoveItem,
  DecreaseQuantity, // Ensure this action type is included
  ClearCart,
}

// Define the type for action payloads
type Action =
  | { type: ActionType.AddItem; payload: CartItem }
  | { type: ActionType.RemoveItem; payload: { id: string } }
  | { type: ActionType.DecreaseQuantity; payload: { id: string } } // Ensure this line is correctly added
  | { type: ActionType.ClearCart };

function cartReducer(state: CartState, action: Action): CartState {
  let newState = state; // Default to current state

  switch (action.type) {
    case ActionType.AddItem: {
      // Similar logic as before to handle adding an item
      const itemKey = `${action.payload.id}-${action.payload.size}-${action.payload.color}`;
      const existingItemIndex = state.items.findIndex(
        (item) => `${item.id}-${item.size}-${item.color}` === itemKey
      );

      if (existingItemIndex !== -1) {
        newState = {
          ...state,
          items: state.items.map((item, index) => {
            if (index === existingItemIndex) {
              return {
                ...item,
                quantity: item.quantity + action.payload.quantity,
              };
            }
            return item;
          }),
        };
      } else {
        newState = { ...state, items: [...state.items, action.payload] };
      }
      break;
    }
    case ActionType.RemoveItem: {
      newState = {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
      break;
    }
    case ActionType.DecreaseQuantity: {
      newState = {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };
      break;
    }
    case ActionType.ClearCart: {
      newState = { ...state, items: [] };
      break;
    }
  }

  // Update localStorage with the new state after any action
  localStorage.setItem("cart", JSON.stringify(newState));
  return newState;
}

// Initial state of the cart
const initialState: CartState = {
  items: [],
};

// CartProvider component
export const CartProvider: React.FC = ({ children }) => {
  const initialState: CartState = JSON.parse(
    localStorage.getItem("cart") || '{"items":[]}'
  );
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item: CartItem) =>
    dispatch({ type: ActionType.AddItem, payload: item });
  const removeItem = (id: string) =>
    dispatch({ type: ActionType.RemoveItem, payload: { id } });
  const decreaseItemQuantity = (id: string) =>
    dispatch({ type: ActionType.DecreaseQuantity, payload: { id } });
  const clearCart = () => dispatch({ type: ActionType.ClearCart });

  return (
    <CartContext.Provider
      value={{ state, addItem, removeItem, decreaseItemQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
