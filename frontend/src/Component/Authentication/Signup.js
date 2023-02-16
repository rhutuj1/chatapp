import React from "react";
import {
  VStack,
  StackDivider,
  Box,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/form-control";
import { useState } from "react";

function Signup() {
  const [name, setname] = useState();
  const [show, setshow] = useState(false);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confpass, setconfpass] = useState();
  const [pic, setpic] = useState();
  const click1 = () => setshow(!show);
  const postdetails = (pics)=>{
  }

  const submit = ()=>{

  }

  return (
    <VStack spacing="5px" color="black">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setname(e.target.value)}
        />
      </FormControl>
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

      <FormControl id="cnfpassword" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setconfpass(e.target.value)}
             />
          <InputRightElement>
            <Button size="sm" onClick={click1}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pic">
        <FormLabel>Profile Picture</FormLabel>
        <Input
          type="file"
          accept="image/*"
          placeholder="Add a profile picture"
          onChange={(e) => postdetails(e.target.files[0])}
        />
      </FormControl>
    <Button width= "100%" colorScheme="blue" onClick={submit}>Sign Up</Button>
    </VStack>
  );
}

export default Signup;
