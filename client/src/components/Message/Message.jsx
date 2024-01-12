import { Flex, Text } from '@chakra-ui/react';
import useCurrentTime from '../../hooks/useCurrentTime.jsx';

const Message = (props) => {
  const { message, sender } = props;
  const currentTime = useCurrentTime();

  const messageStyle = {
    fontWeight: 'bold',
    marginRight: '10px',
    borderBottom: '2px solid black'
  };

  return (
    <Flex w={'100%'} align={'start'} justify={'start'} direction={'column'}>
      <Text
        element="p"
        color="black"
        title={message}
        padding="0px"
        borderBottom="none"
      >
        <span style={{ ...messageStyle }}>
          {sender} @ {currentTime}:
        </span>
        {message}
      </Text>
    </Flex>
  );
};

export default Message;
