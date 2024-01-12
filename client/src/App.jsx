import './App.css';
import { useEffect, useState } from 'react';
//import { Router, Route, Redirect, Switch } from 'react-router-dom';
import useStore from './store/store';
import Login from './views/Login/Login';
import Chat from './views/Chat/Chat';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

function App() {
  const [messageOutgoing, setMessageOutgoing] = useState('');
  const [messagesReceived, setMessagesReceived] = useState([]);
  const [messageSender, setMessageSender] = useState('');
  const [user, setUser] = useState('');
  const [room, setRoom] = useState('');
  const [updateKey, setUpdateKey] = useState(0);

  const { username, isLoggedIn, setIsLoggedIn } = useStore();

  const login = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    setUser(username);
    setRoom("Dev's Room");
  }, [username]);

  const sendMessage = () => {
    socket.emit('send_message', { room, messageOutgoing, user });
  };

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
      socket.emit('join_room', { room, user });
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    socket.on('receive_message', (data) => {
      console.log(data);
      setMessageSender(data.user);
      setMessagesReceived((prevMessages) => [
        ...prevMessages,
        { messageOutgoing: data.messageOutgoing }
      ]);
      setUpdateKey((prevKey) => prevKey + 1);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('receive_message');
    };
  }, [room, user]);

  return (
    <>
      {isLoggedIn ? (
        <Chat
          room={room}
          messagesReceived={messagesReceived}
          messageSender={messageSender}
          updateKey={updateKey}
          sendMessage={sendMessage}
          setMessageOutgoing={setMessageOutgoing}
          messageOutgoing={messageOutgoing}
        />
      ) : (
        <Login onLogin={login} />
      )}
    </>
  );
}

export default App;

{
  /* <Login /> ||
    <Chat
    room={room}
    messagesReceived={messagesReceived}
    messageSender={messageSender}
    updateKey={updateKey}
    sendMessage={sendMessage}
    setMessageOutgoing={setMessageOutgoing}
    messageOutgoing={messageOutgoing}
    /> */
}
