import React, { useState } from 'react';
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import "./Login.css";

function Login() {
  const [username, setUsername] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    !username ? setIsError(true) : setIsError(false);
    isError ? null : login(username);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);

    // If the username is not empty, set the error to false
    setIsError(false);
  }


  return (
    <Flex bg="brand.100" id="loginForm">
      <FormControl isInvalid={isError} isRequired>
        <FormLabel w={"100%"} textAlign={"center"}>Enter Username</FormLabel>
        <Input
          border={'2px solid gray'}
          mb={'10px'}
          color="black"
          onChange={handleChange}
          onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit(e) : null)}
          value={username}
        />
        {!isError ? null : (
          <FormErrorMessage mb={'10px'}>
            Please enter a message
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
}

export default Login;
