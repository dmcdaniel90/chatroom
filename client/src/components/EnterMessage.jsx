import {
  Flex,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react';

const EnterMessage = (props) => {
  const { bgcolor, textColor, btnTextColor, btnColor } = props;
  const isError = false;

  return (
    <Flex h="95%" bg={bgcolor} p={'10px'} justify={''} borderRadius={'10px'}>
      <FormControl id="message" isInvalid={isError} isRequired>
        <FormLabel>Enter a Message</FormLabel>
        <Textarea
          border={'2px solid gray'}
          mb={'10px'}
          color={textColor ? textColor : null}
        />
        {!isError ? null : (
          <FormErrorMessage mb={'10px'}>
            Please enter a message
          </FormErrorMessage>
        )}
        <Button bg={btnColor} color={btnTextColor} mb={'10px'} w={'200px'}>
          Send
        </Button>
      </FormControl>
    </Flex>
  );
};

export default EnterMessage;
