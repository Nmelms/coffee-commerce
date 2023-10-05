import { create } from "zustand";

export const useStore = create((set) => ({
  name: [],
  maxPrice: 0,
}));
