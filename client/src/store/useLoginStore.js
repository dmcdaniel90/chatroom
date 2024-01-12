import { create } from 'zustand';

const useLoginStore = create((set) => ({
  username: '',
  setUsername: (username) => set({ username }),
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  isError: false,
  setIsError: (isError) => set({ isError })
}));

export default useLoginStore;
