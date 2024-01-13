import { create } from 'zustand';

const useMessageStore = create((set) => ({
  message: '',
  setMessage: (message) => set(() => ({ message })),
  messagesReceived: [],
  setMessagesReceived: (message) =>
    set((state) => ({
      messagesReceived: [...state.messagesReceived, message]
    })),
  isError: false,
  setIsError: (isError) => set(() => ({ isError: isError }))
}));

export default useMessageStore;
