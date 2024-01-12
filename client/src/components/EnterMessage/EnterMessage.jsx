import { GridItem } from '@chakra-ui/react';
import MessageInput from '../MessageInput/MessageInput';

const EnterMessage = (props) => {
  const { sendMessage, setMessageOutgoing, messageOutgoing } = props;

  return (
    <GridItem
      colSpan={5}
      bg="brand.200"
      as="section"
      borderTopLeftRadius={'10px'}
      p="20px"
    >
      <MessageInput
        bgcolor="brand.100"
        textColor="black"
        btnTextColor="white"
        btnColor="brand.200"
        sendMessage={sendMessage}
        setMessageOutgoing={setMessageOutgoing}
        messageOutgoing={messageOutgoing}
      />
    </GridItem>
  );
};

export default EnterMessage;
