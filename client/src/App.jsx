import './App.css';
import { useEffect, useState } from 'react';
import useLoginStore from './store/useLoginStore';
//import useUserStore from './store/useUserStore';
import Login from './views/Login/Login';
import Chat from './views/Chat/Chat';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

function App() {
  const [messageSender, setMessageSender] = useState('');

  const { username, isLoggedIn, room } = useLoginStore();

  // const sendMessage = () => {
  //   socket.emit('send_message', { room, messageOutgoing, username });
  // };

  // socket.on('receive_message', (data) => {
  //   console.log('Receive message event received');
  //   setMessageSender(data.user);
  //   setMessagesReceived((prevMessages) => [
  //     ...prevMessages,
  //     { messageOutgoing: data.messageOutgoing }
  //   ]);
  // });

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
      // socket.off('receive_message');
    };
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <Chat
          room={room}
          // messagesReceived={messagesReceived}
          // messageSender={messageSender}
          // sendMessage={sendMessage}
          // setMessageOutgoing={setMessageOutgoing}
          // messageOutgoing={messageOutgoing}
        />
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;