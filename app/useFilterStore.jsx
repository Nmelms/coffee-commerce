import { create } from "zustand";

export const useFilterStore = create((set) => ({
  filters: {
    roast: [],
    price: 0,
    brand: [],
    // ... add other filters
  },
  products: {
    all: [],
    filtered: [],
  },

  // Action to set a specific filter
  setFilter: (filterType, values) =>
    set((state) => ({
      ...state,
      filters: {
        ...state.filters,
        [filterType]: values,
      },
    })),
  setProducts: (filterType, values) =>
    set((state) => ({
      ...state,
      products: {
        ...state.products,
        [filterType]: values,
      },
    })),

  // Action to clear all filters
  clearAllFilters: () =>
    set((state) => ({
      ...state,
      filters: {
        roast: [],
        price: [],
        brand: [],
        // ... reset other filters
      },
    })),
}));
