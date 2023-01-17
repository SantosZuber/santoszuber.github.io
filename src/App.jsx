import { HStack, Text, VStack } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {
  return (
    <VStack>
      <Header />
      <VStack w={"80%"} gap="50px">
        <HStack>
          <Text paddingTop={"30px"} fontWeight={"semibold"} fontSize={"40px"}>
            My
          </Text>
          <Text
            textDecor={"underline"}
            textDecorationColor="#03506F"
            textDecorationThickness={"4px"}
            paddingTop={"30px"}
            fontWeight={"semibold"}
            fontSize={"40px"}
          >
            Skills
          </Text>
        </HStack>
        <Skills />
        <HStack>
          <Text paddingTop={"30px"} fontWeight={"semibold"} fontSize={"40px"}>
            My
          </Text>
          <Text
            textDecor={"underline"}
            textDecorationColor="#03506F"
            textDecorationThickness={"4px"}
            paddingTop={"30px"}
            fontWeight={"semibold"}
            fontSize={"40px"}
          >
            Projects
          </Text>
        </HStack>
        <Projects />
      </VStack>
    </VStack>
  );
}

export default App;
