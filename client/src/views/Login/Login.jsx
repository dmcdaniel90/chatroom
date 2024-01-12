import { useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react';
import './Login.css';
import useStore from '../../store/store.js';

const Login = () => {
  //const history = useHistory();

  const username = useStore((state) => state.username);
  const setUsername = useStore((state) => state.setUsername);
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);

  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    !username ? setIsError(true) : setIsError(false);
    if (isError) return;

    console.log(username);

    setIsLoggedIn(true);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
    setIsError(false);
  };

  return (
    <Flex bg="brand.100" id="loginForm">
      <FormControl isInvalid={isError} isRequired>
        <FormLabel w={'100%'} textAlign={'center'}>
          Enter Username
        </FormLabel>
        <Input
          border={'2px solid gray'}
          mb={'10px'}
          color="black"
          onChange={handleChange}
          value={username}
        />
        {!isError ? null : (
          <FormErrorMessage mb={'10px'}>
            Please enter a username
          </FormErrorMessage>
        )}
        <Button
          id="loginBtn"
          bg="brand.200"
          color="white"
          mb={'10px'}
          w={'200px'}
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Enter Chat
        </Button>
      </FormControl>
    </Flex>
  );
};

export default Login;
