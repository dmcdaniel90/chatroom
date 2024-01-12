import { useState } from 'react';

function useUser() {
  const [id, setId] = useState(1);
  const [username, setUsername] = useState('');
  const [outgoingMessage, setOutgoingMessage] = useState('');
  const [messagesReceived, setMessagesReceived] = useState([]);
  const [receivedFrom, setReceivedFrom] = useState('');
  const [room, setRoom] = useState('');
  const [messageId, setMessageId] = useState(0);

  const toJSON = () => ({
    id,
    username,
    outgoingMessage,
    messagesReceived,
    receivedFrom,
    room,
    messageId
  });

  const save = () => {
    const userData = toJSON();
    console.log({ userData });

    //localStorage.setItem('user', JSON.stringify(user));

    return true;
  };

  return (
    id,
    setId,
    username,
    setUsername,
    outgoingMessage,
    setOutgoingMessage,
    messagesReceived,
    setMessagesReceived,
    receivedFrom,
    setReceivedFrom,
    room,
    setRoom,
    messageId,
    setMessageId,
    toJSON,
    save
  );
}

export default useUser;
