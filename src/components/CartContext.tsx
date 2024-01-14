import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
//import { CartAction, CartState } from "./types";

interface CartItems {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItems[];
}
interface CartAction {
  type:
    | "ADD_TO_CART"
    | "REMOVE_FROM_CART"
    | "UPDATE_TO_CART"
    | "LOAD_CART_ITEMS";
  payload: CartItems;
}

const CartContext = createContext<
  { state: CartState; dispatch: React.Dispatch<CartAction> } | undefined
>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      // eslint-disable-next-line no-case-declarations
      //   const existingCartItemIndex = state.cartItems.findIndex(
      //     (item) => item.name === action.payload.name
      //   );

      //   if (existingCartItemIndex !== -1) {
      //     // Item already exists in the cart, update its quantity
      //     const updatedCartItems = [...state.cartItems];
      //     updatedCartItems[existingCartItemIndex].quantity +=
      //       action.payload.quantity;
      //     console.log("hey context");

      //     return {
      //       ...state,
      //       cartItems: updatedCartItems,
      //     };
      // } else {
      // Item is not in the cart, add a new item

      console.log("new Item");
      // eslint-disable-next-line no-case-declarations
      const updatedState = {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
      localStorage.setItem("cartItems", JSON.stringify(updatedState.cartItems));
      return updatedState;
    //}
    // Add more cases as needed

    case "REMOVE_FROM_CART":
      // eslint-disable-next-line no-case-declarations
      const updatedCartItems = state.cartItems.filter(
        (item) => item.name !== action.payload.name
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    case "LOAD_CART_ITEMS":
      return {
        ...state,
        cartItems: Array.isArray(action.payload)
          ? action.payload
          : [action.payload],
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  console.log("usecart");
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  console.log("contextProvider");
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  useEffect(() => {
    // Load cart items from localStorage on app initialization
    const savedCartItems = localStorage.getItem("cartItems");

    if (savedCartItems) {
      dispatch({
        type: "LOAD_CART_ITEMS",
        payload: JSON.parse(savedCartItems),
      });
    }
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
