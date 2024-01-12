import { Grid } from '@chakra-ui/react';
import MessageViewer from '../../components/MessageViewer/MessageViewer';
import EnterMessage from '../../components/EnterMessage/EnterMessage';
//import Navbar from '../../components/Navbar/Navbar'

const Chat = (props) => {
  const {
    room,
    messagesReceived,
    messageSender,
    updateKey,
    sendMessage,
    setMessageOutgoing,
    messageOutgoing
  } = props;

  return (
    <Grid
      h="100vh"
      w="100vw"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      as={'main'}
    >
      {/* <Navbar /> */}
      <MessageViewer
        room={room}
        messagesReceived={messagesReceived}
        messageSender={messageSender}
        updateKey={updateKey}
      />
      <EnterMessage
        sendMessage={sendMessage}
        setMessageOutgoing={setMessageOutgoing}
        messageOutgoing={messageOutgoing}
      />
    </Grid>
  );
};

export default Chat;
