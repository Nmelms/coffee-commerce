import { create } from "zustand";

const useCartStore = create((set) => ({
  cartData: [],
  itemsCount: 0,
  cartItems: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  updateItemsCount: (count) => set(() => ({ itemsCount: count })),
  updateCartItems: (items) => set(() => ({ cartItems: items })),
  setCartData: (data) => set(() => ({ cartData: data })),
}));

export default useCartStore;
