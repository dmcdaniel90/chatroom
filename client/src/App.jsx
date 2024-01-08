import './App.css';
import { Grid, GridItem, Heading, Flex, Text } from '@chakra-ui/react';
import Header from './components/Header';
import EnterMessage from './components/EnterMessage';

function App() {
  return (
    <Grid
      h="100vh"
      w="100vw"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      as={'main'}
    >
      <GridItem rowSpan={5} colSpan={1} bg="brand.200" as={'nav'}>
        <Header
          padding="20px"
          borderBottom="5px solid white"
          element="h2"
          color="white"
          title="Rooms"
        />
      </GridItem>
      <GridItem
        rowSpan={4}
        colSpan={4}
        bg="brand.200"
        as="section"
        borderBottomLeftRadius={'10px'}
      >
        <Header
          element="h1"
          color="white"
          title="Room Name"
          padding="20px"
          borderBottom="5px solid white"
        />
        <Flex
          h="80%"
          bg={'brand.100'}
          m="20px"
          p={'20px'}
          borderRadius={'10px'}
        >
          Chat Section
        </Flex>
      </GridItem>
      <GridItem
        colSpan={4}
        bg="brand.200"
        as="section"
        borderTopLeftRadius={'10px'}
        p="20px"
      >
        <EnterMessage
          bgcolor="brand.100"
          textColor="black"
          btnTextColor="white"
          btnColor="brand.200"
        />
      </GridItem>
    </Grid>
  );
}

export default App;
