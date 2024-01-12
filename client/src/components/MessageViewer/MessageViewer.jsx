import { Flex, GridItem, VStack } from '@chakra-ui/react';
import Header from '../Header/Header';
import Message from '../Message/Message';

const MessageViewer = (props) => {
  const { room, messagesReceived, messageSender, updateKey } = props;

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
  );
};

export default MessageViewer;
