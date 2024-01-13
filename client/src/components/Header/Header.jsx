import { Flex, Heading } from '@chakra-ui/react';
import { memo } from 'react';

const Header = memo((props) => {
  const { padding, borderBottom, color, element, title } = props;

  return (
    <Flex p={padding} borderBottom={borderBottom}>
      <Heading as={element} color={color}>
        {title}
      </Heading>
      {/* {isNav ? 
      <Button bg={'brand.100'} w={'150px'} marginLeft={'3rem'} id="joinRoom" onClick={handleSetUser}>
          Join Room
      </Button>
      : null} */}
    </Flex>
  );
});

Header.displayName = 'Header';
export default Header;
