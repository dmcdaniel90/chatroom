import {
  Flex,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react';
import { useState } from 'react';

const EnterMessage = (props) => {
  const {
    bgcolor,
    textColor,
    btnTextColor,
    btnColor,
    sendMessage,
    setMessageOutgoing,
    messageOutgoing
  } = props;
  const [isError, setIsError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    !messageOutgoing ? setIsError(true) : setIsError(false);
    isError ? null : sendMessage();

    setMessageOutgoing('');
  };

  const handleChange = (e) => {
    setIsError(false);
    setMessageOutgoing(e.target.value);
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
          value={messageOutgoing}
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

export default EnterMessage;
