import './App.css';
import { useEffect, useState } from 'react';
import { Grid, GridItem, Flex, VStack } from '@chakra-ui/react';
import Header from './components/Header';
import EnterMessage from './components/EnterMessage';
import Message from './components/Message';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

function App() {
  const [messageOutgoing, setMessageOutgoing] = useState('');
  const [messagesReceived, setMessagesReceived] = useState([]);
  const [messageSender, setMessageSender] = useState('');
  const [user, setUser] = useState('');
  const [room, setRoom] = useState('');
  const [updateKey, setUpdateKey] = useState(0);

  useEffect(() => {
    setUser('Devin');
    setRoom("Dev's Room");
  }, []);

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
    <Grid
      h="100vh"
      w="100vw"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      as={'main'}
    >
      {/* <GridItem rowSpan={5} colSpan={1} bg="brand.200" as={'nav'}>
        <Header
          padding="20px"
          borderBottom="5px solid white"
          element="h2"
          color="white"
          title="Rooms"
        />
      </GridItem> */}
      <GridItem
        rowSpan={4}
        colSpan={5}
        bg="brand.200"
        as="section"
        borderBottomLeftRadius={'10px'}
      >
        <Header
          element="h1"
          color="white"
          title={room}
          padding="20px"
          borderBottom="5px solid white"
          // isNav="false"
          // setUser={setUser}
        />
        <Flex
          h="80%"
          bg={'brand.100'}
          m="20px"
          p={'40px'}
          borderRadius={'10px'}
        >
          <VStack
            id="chatbox"
            color={'black'}
            w={'100%'}
            align={'start'}
            overflowY={'scroll'}
            style={{
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              textOverflow: 'ellipsis',
              whiteSpace: 'normal'
            }}
          >
            {messagesReceived.map((message) => (
              <Message
                key={updateKey}
                message={message.messageOutgoing}
                sender={messageSender}
              />
            ))}
          </VStack>
        </Flex>
      </GridItem>
      <GridItem
        colSpan={5}
        bg="brand.200"
        as="section"
        borderTopLeftRadius={'10px'}
        p="20px"
      >
        <EnterMessage
          bgcolor="brand.100"
          textColor="black"
          btnTextColor="white"
          btnColor="brand.200"
          sendMessage={sendMessage}
          setMessageOutgoing={setMessageOutgoing}
          messageOutgoing={messageOutgoing}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
