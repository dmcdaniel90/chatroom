import {
  Flex,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react';
import useMessageStore from '../../store/useMessageStore.js';
import useLoginStore from '../../store/useLoginStore';
import socket from '../../utils/socket.js';

const MessageInput = (props) => {
  const { bgcolor, textColor, btnTextColor, btnColor } = props;

  const { message, setMessage, isError, setIsError } = useMessageStore();
  const { username, room } = useLoginStore();

  const handleClick = (e) => {
    e.preventDefault();
    !message ? setIsError(true) : handleSendMessage();
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
    setIsError(false);
  };

  const handleSendMessage = () => {
    socket.emit('send_message', {
      room,
      messageOutgoing: { username, message, key: socket.id }
    });
    setMessage('');
  };

  return (
    <Flex h="95%" bg={bgcolor} p={'10px'} borderRadius={'10px'}>
      <FormControl id="messageForm" isInvalid={isError} isRequired>
        <FormLabel>Enter a Message</FormLabel>
        <Textarea
          border={'2px solid gray'}
          mb={'10px'}
          color={textColor ? textColor : null}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => (e.key === 'Enter' ? handleClick(e) : null)}
          value={message}
        />
        {!isError ? null : (
          <FormErrorMessage mb={'10px'}>
            Please enter a message
          </FormErrorMessage>
        )}
        <Button
          id="sendBtn"
          bg={btnColor}
          color={btnTextColor}
          mb={'10px'}
          w={'200px'}
          onClick={(e) => handleClick(e)}
        >
          Send
        </Button>
      </FormControl>
    </Flex>
  );
};

export default MessageInput;
