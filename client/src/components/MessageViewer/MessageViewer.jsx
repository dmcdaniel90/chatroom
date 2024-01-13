import { Flex, GridItem, VStack } from '@chakra-ui/react';
import Header from '../Header/Header';
import Message from '../Message/Message';
import { memo, useEffect } from 'react';
import io from 'socket.io-client';
import useMessageStore from '../../store/useMessageStore';
import useLoginStore from '../../store/useLoginStore';

const socket = io.connect('http://localhost:3000');

const MessageViewer = () => {
  const { room } = useLoginStore();
  const { messagesReceived, setMessagesReceived, messageKey, incrementMessageKey } = useMessageStore();

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log('Receive message event received', data);
      setMessagesReceived(data.messageOutgoing);
      incrementMessageKey();
    });
  }, []);


  return (
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
      <Flex h="80%" bg={'brand.100'} m="20px" p={'40px'} borderRadius={'10px'}>
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
          {
            messagesReceived.map((messageReceived) => (
            <Message
              key={messageReceived.key}
              message={messageReceived.message}
              sender={messageReceived.username}
            />
          ))}
        </VStack>
      </Flex>
    </GridItem>
  );
};

export default MessageViewer;
