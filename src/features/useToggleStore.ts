import { create } from "zustand";

// 1️⃣ Define the store type (interface)
interface ToggleState {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

// 2️⃣ Create the store with type support
const useToggleStore = create<ToggleState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useToggleStore;
