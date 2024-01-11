import { Flex, Heading } from '@chakra-ui/react';

const Header = (props) => {
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
};

export default Header;
