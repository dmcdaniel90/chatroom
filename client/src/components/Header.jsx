import { Flex, Heading } from '@chakra-ui/react';

const Header = (props) => {
  const { padding, borderBottom, color, element, title } = props;

  return (
    <Flex p={padding} borderBottom={borderBottom}>
      <Heading as={element} color={color}>
        {title}
      </Heading>
    </Flex>
  );
};

export default Header;
