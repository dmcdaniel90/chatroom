import { create } from 'zustand';

const useStore = create((set) => ({
  username: '',
  setUsername: (username) => set({ username }),
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn })
}));

export default useStore;
