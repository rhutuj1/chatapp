import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';

function Login() {
    const [name, setname] = useState();
    const [show, setshow] = useState(false);
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const click1 = () => setshow(!show);
    const submit1  = () => {

    }

    const submit2  = () => {

    }
  return (
    <VStack spacing="5px" color="black">
    <FormControl id="email" isRequired>
      <FormLabel>E-mail</FormLabel>
      <Input
        placeholder="Enter your email"
        onChange={(e) => setemail(e.target.value)}
      />
    </FormControl>

    <FormControl id="password" isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup>
        <Input
          type={show ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
           />
        <InputRightElement>
          <Button size="sm" onClick={click1}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
    <Button width= "100%" style={{marginBottom:10,marginTop:15}}colorScheme="blue" onClick={submit1}>Login</Button>
    <Button width= "100%" colorScheme="gray" onClick={submit2}>Guest User</Button>
    
  </VStack>
  )
}

export default Login
