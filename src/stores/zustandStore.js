import { create } from "zustand";

export const useZustandStore = create((set) => ({
  value: 0,
  increment: () => set((state) => ({ value: state.value + 1 })),
}));
