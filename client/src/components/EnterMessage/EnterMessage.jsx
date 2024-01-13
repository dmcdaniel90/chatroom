import { GridItem } from '@chakra-ui/react';
import MessageInput from '../MessageInput/MessageInput';
import { memo } from 'react';

const EnterMessage = memo(() => {
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
      />
    </GridItem>
  );
});

export default EnterMessage;
