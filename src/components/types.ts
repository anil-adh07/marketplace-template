// types.ts
export interface CartItem {
  name: string;
  price: string;
  image: string;
  quantity: number;
}

export type CartAction = { type: "ADD_TO_CART"; payload: CartItem };
// Add more action types as needed

export interface CartState {
  cartItems: CartItem[];
}
