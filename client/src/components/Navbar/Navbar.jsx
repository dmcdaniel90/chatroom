import { GridItem, Header } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <GridItem rowSpan={5} colSpan={1} bg="brand.200" as={'nav'}>
      <Header
        padding="20px"
        borderBottom="5px solid white"
        element="h2"
        color="white"
        title="Rooms"
      />
    </GridItem>
  );
};

export default Navbar;
