// import { chakra } from "@chakra-ui/react";
import React from "react";
import Login from "../Component/Authentication/Login.js"
import Signup from "../Component/Authentication/Signup.js"
import {
  Box,
  Container,
  Text,
  Tabs,
  Center,
  Tab,
  TabPanel, 
  TabPanels,
  TabList,
} from "@chakra-ui/react";
const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        borderRadius="lg"
        borderWidth="1px"
        m="40px 0 15px 0"
        width="100%"
      >
        <Text fontSize="2xl" fontFamily="Work sans" color="black">
          <Center>ChitChat</Center>
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList mb="20px">
            <Tab w = "50%">Login</Tab>
            <Tab w = "50%">Register</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
             <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
