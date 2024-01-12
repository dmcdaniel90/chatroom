import { create } from "zustand";
import io from 'socket.io-client';
import useUser from "../hooks/useUser";


const useStore = create((set) => ({
  username: "",
  setUsername: (username) => set({ username }),
}))

export default useStore;