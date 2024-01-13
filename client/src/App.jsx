import './App.css';
import { useEffect } from 'react';
import useLoginStore from './store/useLoginStore';
import Login from './views/Login/Login';
import Chat from './views/Chat/Chat';
import socket from './utils/socket.js';

function App() {
  const { isLoggedIn } = useLoginStore();

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  return <>{isLoggedIn ? <Chat /> : <Login />}</>;
}

export default App;
