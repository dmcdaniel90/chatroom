import { useRouteError } from 'react-router-dom';
import { Heading, Text, Box, Flex } from '@chakra-ui/react';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Flex
      id="error-page"
      width={'100%'}
      height={'100%'}
      textAlign={'center'}
      justify={'center'}
      align={'center'}
    >
      <Box>
        <Heading as={'h1'} mb={'10px'}>
          Oops!
        </Heading>
        <Text mb={'10px'}>Sorry, an unexpected error has occurred.</Text>
        <Text>
          <Text fontStyle={'italic'}>{error.statusText || error.message}</Text>
        </Text>
      </Box>
    </Flex>
  );
}
