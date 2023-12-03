import { create } from "zustand";

const useCartNumber = create((set) => ({
  itemCount: 0, // Initial state for cart item count

  // Method to increment the item count
  addToCart: (quantity = 1) =>
    set((state) => ({ itemCount: state.itemCount + quantity })),

  // Method to decrement the item count
  removeFromCart: (quantity = 1) =>
    set((state) => ({ itemCount: Math.max(0, state.itemCount - quantity) })),

  // Method to reset the item count
  resetCart: () => set({ itemCount: 0 }),
}));

export default useCartNumber;
