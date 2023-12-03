import { create } from "zustand";

const useCartNumber = create((set) => ({
  itemCount: 0, // Initial state for cart item count
  addToCart: (quantity = 1) =>
    set((state) => ({ itemCount: state.itemCount + quantity })),
  removeFromCart: (quantity = 1) =>
    set((state) => ({ itemCount: Math.max(0, state.itemCount - quantity) })),
  resetCart: () => set({ itemCount: 0 }),
}));

export default useCartNumber;
